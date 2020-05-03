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
        forceLink(this.links)
          .id(d => d.id)
          .distance(200)
      )
      .force("charge", forceManyBody())
      .force("center", forceCenter(this.width / 2, this.height / 2));

    this.simulation.on("tick", () => {
      this.link
        .attr("x1", d => d.source.x)
        .attr("y1", d => d.source.y)
        .attr("x2", d => d.target.x)
        .attr("y2", d => d.target.y);

      this.node.attr("x", d => d.x - 30).attr("y", d => d.y - 30);
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
      .selectAll(".skillNode");

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
      .append("svg")
      .html(
        `
              <path
                d="m49.736 30.143a22.105 22.105 0 0 1-22.031 22.105 22.105 22.105 0 0 1-22.179-21.956 22.105 22.105 0 0 1 21.881-22.252 22.105 22.105 0 0 1 22.326 21.807"
                fill="#ededed"
                stroke-width="0"
                style="paint-order:stroke fill markers"
              />
              <path
                d="m102.56 0.99805c-14.431 0-88.941 43.015-96.158 55.516-7.2172 12.495-7.2172 98.525 0 111.03 7.2153 12.499 81.724 55.516 96.158 55.516 14.431 0 88.941-43.017 96.158-55.516 7.2172-12.495 7.2172-98.525 0-111.03-7.2153-12.499-81.724-55.516-96.158-55.516zm-41.264 41.732h17.123c10.036 0 17.756 2.123 23.16 6.3691 5.4594 4.2462 10.065 11.389 13.814 21.426l37.885 100.91h-29.613l-18.445-48.637-19.439 48.637h-29.613l35.818-84.373-5.1289-13.896c-1.544-4.2462-3.3634-7.1415-5.459-8.6855-2.0403-1.544-5.6542-2.3145-10.838-2.3145h-9.2637v-19.439z"
                fill="#30373E"
                stroke-width=".4717"
                style="paint-order:stroke fill markers"
                transform="matrix(.26458 0 0 .26458 -.00010697 0)"
              />
              <path
                d="m173.31 36.273v0.005859c0.14637 0.4065 0.29496 0.81214 0.43164 1.2227 1.6284 1.5198-6.969 42.977-43.41 72.809l22.949 61.129h-29.613l-17.332-45.703c-0.93341 0.46033-1.8726 0.91781-2.8301 1.3613l-17.723 44.342h-29.613l14.404-33.93c-18.983 3.5877-41.22 4.141-67.254 0.15429-0.67709-2.0458-1.3096-4.0594-1.9219-6.0586 0.71189 16.992 2.3728 31.373 5.0059 35.934 7.2154 12.499 81.724 55.518 96.158 55.518 14.431 0 88.943-43.018 96.16-55.518 7.2173-12.495 7.2173-98.526 0-111.03-2.4314-4.212-12.572-11.906-25.412-20.234z"
                fill="#161a1d"
                stroke-width=".47171"
                style="paint-order:stroke fill markers"
                transform="matrix(.26458 0 0 .26458 -.00010697 0)"
              />
            `
      )
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
