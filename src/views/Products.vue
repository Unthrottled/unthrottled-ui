<template>
  <Layout>
    <div class="products">
      <div class="sogosContainer">
        <div>
          <svg
            width="248.7"
            height="270"
            version="1.1"
            viewBox="0 0 65.801 71.437"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m61.543 19.183c2.1498 3.7234 2.1498 29.349 0 33.072s-24.343 16.537-28.642 16.537c-4.2994 0-26.493-12.813-28.642-16.537-2.1498-3.7234-2.1498-29.349 0-33.072 2.1498-3.7234 24.343-16.537 28.642-16.537 4.2994 0 26.493 12.813 28.642 16.537z"
              fill="#454545"
              stroke-width=".1405"
              style="paint-order:stroke fill markers;opacity: 0.5"
            />
            <g transform="matrix(.1405 0 0 .1405 -.37837 .26589)">
              <path
                d="m262.13 148.88-58.415 96.48 54.347 98.829 112.76 2.3487 58.415-96.48-54.347-98.829zm16.878 30.692 77.743 1.6195 37.47 68.137-40.274 66.518-77.743-1.619-37.469-68.137z"
                fill="#f0d481"
                style="paint-order:stroke fill markers"
              />
              <path
                d="m393.79 250.03-39.852 65.821-77.743-1.619-0.0289-0.0527-18.112 30.015 112.76 2.3487 58.415-96.48z"
                fill="#e8ad4f"
              />
              <path
                d="m290.95 201.29-27.438 45.318 25.527 46.42 52.965 1.1033 16.393-27.075-43.826-0.0956-0.0858-18.538 54.808 0.11938-25.378-46.149z"
                fill="#e8ad4f"
                style="paint-order:stroke fill markers"
              />
              <path
                d="m314.48 248.42-23.535-47.132 52.965 1.1031 25.527 46.421z"
                fill="#f0d481"
              />
              <path
                d="m123.14 274.37h69.24l18.861-57.285h-83.938l-4.8459 54.928z"
                fill="#ffe4c9"
              />
              <rect
                transform="matrix(.62442 -.78109 .47987 .87734 0 0)"
                x="-25.687"
                y="202.07"
                width="163.21"
                height="87.832"
                fill="#f0d481"
                style="paint-order:stroke fill markers"
              />
              <rect
                transform="matrix(.62442 -.78109 .47987 .87734 0 0)"
                x="-74.897"
                y="326.07"
                width="163.21"
                height="87.832"
                fill="#e8ad4f"
                style="paint-order:stroke fill markers"
              />
            </g>
          </svg>
        </div>
        <div class="sogosExcerpt">
          <h1 class="sogosHeadline">SOGoS</h1>
          <h4 class="caption">
            Strategic Orchestration and <br />Governance System
          </h4>
        </div>
      </div>
      <div>
        <p class="productTagline">
          Find out where your
          <span class="highlight">maximum potential</span> lies. Then
          <span class="highlight">push yourself</span> to the limits of your
          ability. Knowing that you can
          <span class="highlight">rest easy</span> when you really need to.
        </p>
        <p class="productTagline">
          See what SOGoS can do for you:<br />
          <a
            href="https://sogos.unthrottled.io/about"
            target="_blank"
            class="productLink"
            >https://sogos.unthrottled.io/about</a
          >
        </p>
      </div>
    </div>
  </Layout>
</template>

<style lang="scss">
.products {
  margin: auto;
  max-width: 550px;
}

.highlight {
  color: #fff;
  font-weight: 500;
}

.productLink {
  text-decoration: none;
  color: #e8ad4f;
}

.productTagline {
  font-size: 24px;
  line-height: 2rem;
  font-weight: 400;
  color: #b2b2b4;
}

.caption {
  color: #a5a5a7;
}

.sogosExcerpt {
  margin: auto 0 auto 2rem;
}

.sogosHeadline {
  font-size: 3.5rem;
  color: #fff;
}

.sogosContainer {
  margin-top: 2rem;
  display: flex;
  justify-content: center;
}
</style>

<script>
import Layout from "../components/Layout";
export default {
  name: "Home",
  components: { Layout }
};
</script>
