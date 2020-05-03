<template>
  <Layout>
    <div id="skill-tree-canvas"></div>
  </Layout>
</template>

<script lang="ts">
import Component from "vue-class-component";
import Vue from "vue";
import Layout from "@/components/Layout.vue";
import { event, select } from "d3-selection";
import { drag } from "d3-drag";
import {
  forceCenter,
  forceLink,
  forceManyBody,
  forceSimulation
} from "d3-force";
import { zoom } from "d3-zoom";
import link from "vue-router/src/components/link";
import {
  initialDrawnNodes,
  initialSkillLinks,
  initialSkillNodes
} from "@/components/SkillData";

@Component({
  components: { Layout }
})
export default class Banner extends Vue {
  private nodes = initialSkillNodes;
  private links = initialSkillLinks;
  private expandedNodes = {};
  private drawnNodes = initialDrawnNodes;

  private width = 500;
  private height = 500;
  private simulation: any;
  private link: any;
  private node: any;

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
      if (this.addedToTree(d)) {
        this.drawTree();
      }
    };

    return drag()
      .on("start", dragstarted)
      .on("drag", dragged)
      .on("end", dragended);
  };

  addedToTree(node: any): boolean {
    const nodeId = node.id;
    if (!this.expandedNodes[nodeId]) {
      this.expandedNodes[nodeId] = nodeId;
      if (node.children) {
        const drawableNodes = node.children.nodes.filter(n => {
          console.log("node", n.id, !this.drawnNodes[n.id]);
          return !this.drawnNodes[n.id];
        });
        this.nodes.push(...drawableNodes);
        this.links.push(...node.children.links);
        this.drawnNodes = {
          ...this.drawnNodes,
          ...drawableNodes.reduce((a, n) => {
            a[n.id] = n.id;
            return a;
          }, {})
        };
        return true;
      }
    }
    return false;
  }

  mounted() {
    const canvas = select("#skill-tree-canvas");
    const skillTreeSvg = canvas
      .append("svg")
      .attr("class", "skillTree")
      .attr("viewBox", `0 0 ${this.width} ${this.height}`);

    const drawGroup = skillTreeSvg.append("g");
    skillTreeSvg.call(
      zoom().on("zoom", () => {
        drawGroup.attr("transform", event.transform);
      })
    );

    const centerX = this.width / 2;
    const centerY = this.height / 2;
    this.simulation = forceSimulation(this.nodes)
      .force(
        "link",
        forceLink(this.links)
          .id(d => d.id)
          .distance(d => d.distance || 150)
      )
      .force(
        "charge",
        forceManyBody()
          .strength(-80)
          .distanceMax(1000)
      )
      .force("center", forceCenter(centerX, centerY));

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
      .attr("class", "skillNode")
      .html(d => d.icon)
      .merge(this.node)
      .call(this.nodeDrag(this.simulation));

    this.node.append("title").text(d => d.id);
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

<style lang="scss">
.skillTree {
  cursor: move;
}

.skillNode {
  cursor: pointer;
}
</style>
