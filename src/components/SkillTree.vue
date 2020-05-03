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
      this.links.push({ source: "CountessdeLo", target: "Napoleon", value: 1 });
      this.drawNodes();
    };

    return drag()
      .on("start", dragstarted)
      .on("drag", dragged)
      .on("end", dragended);
  };

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

    drawGroup
      .append("g")
      .attr("stroke", "#999")
      .attr("id", "linkGroup")
      .attr("stroke-opacity", 0.6)
      .selectAll("line");

    drawGroup.append("g").attr("id", "nodeGroup");

    this.drawNodes();
  }

  drawNodes() {
    const linkData = select("#linkGroup")
      .selectAll("line")
      .data(this.links);

    const link = linkData
      .enter()
      .append("line")
      .attr("stroke-width", d => Math.sqrt(d.value));

    linkData.exit().remove();

    // eslint-disable-next-line
    // @ts-ignore
    const simulation = forceSimulation(this.nodes)
      .force(
        "link",
        forceLink(this.links).id(d => d.id)
      )
      .force("charge", forceManyBody())
      .force("center", forceCenter(this.width / 2, this.height / 2));

    const node = select("#nodeGroup")
      .attr("stroke", "#fff")
      .attr("stroke-width", 1.5)
      .selectAll("circle")
      .data(this.nodes)
      .join("circle")
      .attr("r", 5)
      .attr("fill", "red")
      .call(this.nodeDrag(simulation));

    node.append("title").text(d => d.id);

    simulation.on("tick", () => {
      link
        .attr("x1", d => d.source.x)
        .attr("y1", d => d.source.y)
        .attr("x2", d => d.target.x)
        .attr("y2", d => d.target.y);

      node.attr("cx", d => d.x).attr("cy", d => d.y);
    });
  }
}
</script>

<style scoped></style>
