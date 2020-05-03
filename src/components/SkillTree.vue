<template>
  <Layout>
    <div id="skill-tree-canvas"></div>
  </Layout>
</template>

<script lang="ts">
import Component from "vue-class-component";
import Vue from "vue";
import Layout from "@/components/Layout.vue";
import { select, event } from "d3-selection";
import { drag } from "d3-drag";
import {
  forceSimulation,
  forceLink,
  forceManyBody,
  forceCenter
} from "d3-force";
import { zoom } from "d3-zoom";
import link from "vue-router/src/components/link";

@Component({
  components: { Layout }
})
export default class Banner extends Vue {
  private nodes = [
    { id: "Myriel", group: 1 },
    { id: "Napoleon", group: 1 },
    { id: "Mlle.Baptistine", group: 1 },
    { id: "Mme.Magloire", group: 1 },
    { id: "CountessdeLo", group: 1 }
  ];
  private links = [
    { source: "Napoleon", target: "Myriel", value: 1 },
    { source: "Mlle.Baptistine", target: "Myriel", value: 8 },
    { source: "Mme.Magloire", target: "Myriel", value: 10 },
    { source: "Mme.Magloire", target: "Mlle.Baptistine", value: 6 },
    { source: "CountessdeLo", target: "Myriel", value: 1 }
  ];

  private width = 500;
  private height = 500;

  nodeDrag = simulation => {
    const dragstarted = d => {
      if (!event.active) simulation.alphaTarget(0.3).restart();
      d.fx = d.x;
      d.fy = d.y;
    };

    const dragged = d => {
      d.fx = event.x;
      d.fy = event.y;
    };

    const dragended = d => {
      if (!event.active) simulation.alphaTarget(0);
      d.fx = null;
      d.fy = null;
      this.links.push({ source: "Napoleon", target: "CountessdeLo", value: 1 });
      this.drawTree();
    };

    return drag()
      .on("start", dragstarted)
      .on("drag", dragged)
      .on("end", dragended);
  };

  private simulation: any;
  private link: any;
  private node: any;

  mounted() {
    const canvas = select("#skill-tree-canvas");
    const skillTreeSvg = canvas
      .append("svg")
      .attr("viewBox", `0 0 ${this.width} ${this.height}`);

    const drawGroup = skillTreeSvg.append("g");
    skillTreeSvg.call(
      zoom().on("zoom", () => {
        drawGroup.attr("transform", event.transform);
      })
    );

    this.simulation = forceSimulation(this.nodes)
      .force(
        "link",
        forceLink(this.links).id(d => d.id)
      )
      .force("charge", forceManyBody())
      .force("center", forceCenter(this.width / 2, this.height / 2));

    this.simulation.on("tick", () => {
      this.link
        .attr("x1", d => d.source.x)
        .attr("y1", d => d.source.y)
        .attr("x2", d => d.target.x)
        .attr("y2", d => d.target.y);

      this.node.attr("cx", d => d.x).attr("cy", d => d.y);
    });

    this.link = drawGroup
      .append("g")
      .attr("stroke", "#999")
      .attr("id", "linkGroup")
      .attr("stroke-opacity", 0.6)
      .selectAll("line");

    this.node = drawGroup
      .append("g")
      .attr("id", "nodeGroup")
      .attr("stroke", "#fff")
      .attr("stroke-width", 1.5)
      .selectAll("circle");

    this.drawTree();
  }

  drawTree() {
    // Apply the general update pattern to the nodes.
    this.node = this.node.data(this.nodes, function(d) {
      return d.id;
    });
    this.node.exit().remove();
    this.node = this.node
      .enter()
      .append("circle")
      .attr("r", 8)
      .merge(this.node)
      .call(this.nodeDrag(this.simulation));

    // Apply the general update pattern to the links.
    this.link = this.link.data(this.links, function(d) {
      return d.source.id + "-" + d.target.id;
    });
    this.link.exit().remove();
    this.link = this.link
      .enter()
      .append("line")
      .merge(this.link);

    // Update and restart the simulation.
    this.simulation.nodes(this.nodes);
    this.simulation.force("link").links(this.links);
    this.simulation.alpha(1).restart();
  }
}
</script>

<style scoped></style>
