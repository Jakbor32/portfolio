'use client'
import { useEffect, useRef } from 'react'

const ANIMATION_DURATION = 50
const ANIMATION_DELAY_STEP = 15

/**
 * Animates each <path> in an SVG to create a "handwriting" effect.
 * Uses strokeDasharray + strokeDashoffset trick to gradually draw paths.
 */

function animateSvgPaths(svg: SVGSVGElement) {
  const paths = svg.querySelectorAll<SVGPathElement>('path')

  let delay = 0
  paths.forEach((path) => {
    const length = path.getTotalLength()

    path.style.strokeDasharray = String(length)
    path.style.strokeDashoffset = String(length)

    path.animate([{ strokeDashoffset: length }, { strokeDashoffset: 0 }], {
      duration: ANIMATION_DURATION,
      delay,
      fill: 'forwards',
      easing: 'linear',
    })

    delay += ANIMATION_DELAY_STEP
  })
}

export default function Signature() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const svg = containerRef.current?.querySelector('svg')
    if (!svg) return

    animateSvgPaths(svg)
  }, [])

  return (
    <div
      ref={containerRef}
      className="-mt-8 -mb-14 w-64 text-gray-700 dark:text-gray-200"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 664 292"
        width="332"
        height="168"
        aria-hidden="true"
      >
        <path
          d="M 63.000,76.500 C 68.964,77.804 69.000,77.500 75.000,78.500"
          strokeWidth="4.055"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
        ></path>
        <path
          d="M 75.000,78.500 C 81.990,79.266 81.964,79.304 89.000,79.500"
          strokeWidth="3.251"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
        ></path>
        <path
          d="M 89.000,79.500 C 97.104,80.346 96.990,79.766 105.000,79.500"
          strokeWidth="2.995"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
        ></path>
        <path
          d="M 105.000,79.500 C 111.680,79.287 111.104,78.846 117.000,76.500"
          strokeWidth="3.173"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
        ></path>
        <path
          d="M 117.000,76.500 C 121.881,72.862 122.180,73.787 126.000,68.500"
          strokeWidth="3.199"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
        ></path>
        <path
          d="M 126.000,68.500 C 130.992,64.053 130.381,63.862 134.000,58.500"
          strokeWidth="3.205"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
        ></path>
        <path
          d="M 134.000,58.500 C 136.871,51.596 137.492,52.053 139.000,44.500"
          strokeWidth="3.059"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
        ></path>
        <path
          d="M 139.000,44.500 C 139.768,38.268 139.871,41.596 140.000,38.500"
          strokeWidth="3.706"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
        ></path>
        <path
          d="M 140.000,38.500 C 140.166,42.006 140.268,38.768 140.000,45.500"
          strokeWidth="4.571"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
        ></path>
        <path
          d="M 140.000,45.500 C 140.025,52.579 139.666,52.506 139.000,59.500"
          strokeWidth="3.342"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
        ></path>
        <path
          d="M 139.000,59.500 C 137.657,66.039 138.025,66.079 136.000,72.500"
          strokeWidth="3.206"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
        ></path>
        <path
          d="M 136.000,72.500 C 132.867,85.610 132.657,85.539 129.000,98.500"
          strokeWidth="2.409"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
        ></path>
        <path
          d="M 129.000,98.500 C 125.081,110.528 125.367,110.610 121.000,122.500"
          strokeWidth="2.359"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
        ></path>
        <path
          d="M 121.000,122.500 C 119.149,133.428 117.581,132.528 114.000,142.500"
          strokeWidth="2.401"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
        ></path>
        <path
          d="M 114.000,142.500 C 107.620,151.608 108.649,151.928 100.000,159.500"
          strokeWidth="2.436"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
        ></path>
        <path
          d="M 100.000,159.500 C 93.575,166.450 93.620,166.108 86.000,171.500"
          strokeWidth="2.614"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
        ></path>
        <path
          d="M 86.000,171.500 C 81.217,174.457 81.575,174.450 76.000,175.500"
          strokeWidth="3.096"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
        ></path>
        <path
          d="M 76.000,175.500 C 68.497,176.500 68.717,176.957 61.000,176.500"
          strokeWidth="3.018"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
        ></path>
        <path
          d="M 61.000,176.500 C 53.829,177.944 54.497,176.500 48.000,175.500"
          strokeWidth="3.132"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
        ></path>
        <path
          d="M 143.000,125.500 C 136.197,125.502 137.500,127.000 132.000,128.500"
          strokeWidth="4.778"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
        ></path>
        <path
          d="M 132.000,128.500 C 130.278,131.921 129.197,130.502 129.000,135.500"
          strokeWidth="4.115"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
        ></path>
        <path
          d="M 129.000,135.500 C 125.431,139.885 127.778,138.921 127.000,142.500"
          strokeWidth="3.990"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
        ></path>
        <path
          d="M 127.000,142.500 C 132.060,147.388 129.931,147.385 138.000,150.500"
          strokeWidth="3.985"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
        ></path>
        <path
          d="M 138.000,150.500 C 142.904,152.651 142.560,152.888 148.000,153.500"
          strokeWidth="3.621"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
        ></path>
        <path
          d="M 148.000,153.500 C 152.565,155.003 151.904,154.151 156.000,153.500"
          strokeWidth="3.762"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
        ></path>
        <path
          d="M 156.000,153.500 C 161.890,150.954 160.565,151.503 164.000,146.500"
          strokeWidth="4.094"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
        ></path>
        <path
          d="M 164.000,146.500 C 164.684,140.508 166.390,141.454 165.000,134.500"
          strokeWidth="3.498"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
        ></path>
        <path
          d="M 165.000,134.500 C 163.724,126.953 165.184,131.008 165.000,127.500"
          strokeWidth="3.779"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
        ></path>
        <path
          d="M 165.000,127.500 C 168.256,132.686 167.224,128.453 172.000,137.500"
          strokeWidth="4.269"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
        ></path>
        <path
          d="M 172.000,137.500 C 178.693,146.279 178.756,146.186 186.000,154.500"
          strokeWidth="2.810"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
        ></path>
        <path
          d="M 186.000,154.500 C 190.715,159.837 190.693,159.779 196.000,164.500"
          strokeWidth="2.931"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
        ></path>
        <path
          d="M 196.000,164.500 C 199.158,167.853 199.215,167.337 203.000,169.500"
          strokeWidth="3.451"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
        ></path>
        <path
          d="M 250.000,45.500 C 245.892,58.154 245.500,58.000 241.000,70.500"
          strokeWidth="2.416"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
        ></path>
        <path
          d="M 241.000,70.500 C 234.603,84.346 235.392,84.654 229.000,98.500"
          strokeWidth="2.059"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
        ></path>
        <path
          d="M 229.000,98.500 C 225.041,108.363 225.103,108.346 222.000,118.500"
          strokeWidth="2.352"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
        ></path>
        <path
          d="M 222.000,118.500 C 218.735,128.380 219.041,128.363 217.000,138.500"
          strokeWidth="2.425"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
        ></path>
        <path
          d="M 217.000,138.500 C 215.724,146.038 215.735,145.880 216.000,153.500"
          strokeWidth="2.792"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
        ></path>
        <path
          d="M 216.000,153.500 C 214.937,160.905 216.224,159.538 218.000,165.500"
          strokeWidth="3.209"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
        ></path>
        <path
          d="M 299.000,134.500 C 295.014,133.500 295.000,134.000 291.000,133.500"
          strokeWidth="4.844"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
        ></path>
        <path
          d="M 291.000,133.500 C 283.493,133.908 283.514,133.500 276.000,134.500"
          strokeWidth="3.374"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
        ></path>
        <path
          d="M 276.000,134.500 C 264.465,135.197 264.493,135.408 253.000,136.500"
          strokeWidth="2.681"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
        ></path>
        <path
          d="M 253.000,136.500 C 242.553,138.746 242.465,137.697 232.000,139.500"
          strokeWidth="2.553"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
        ></path>
        <path
          d="M 232.000,139.500 C 221.500,139.500 221.553,140.246 211.000,139.500"
          strokeWidth="2.583"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
        ></path>
        <path
          d="M 211.000,139.500 C 201.454,137.458 206.000,139.500 201.000,139.500"
          strokeWidth="3.187"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
        ></path>
        <path
          d="M 201.000,139.500 C 204.471,144.589 200.454,141.958 209.000,148.500"
          strokeWidth="4.023"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
        ></path>
        <path
          d="M 209.000,148.500 C 215.773,153.854 215.471,154.089 223.000,158.500"
          strokeWidth="3.145"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
        ></path>
        <path
          d="M 223.000,158.500 C 230.000,162.500 229.773,162.854 237.000,166.500"
          strokeWidth="2.960"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
        ></path>
        <path
          d="M 237.000,166.500 C 243.878,170.752 244.000,170.500 251.000,174.500"
          strokeWidth="2.908"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
        ></path>
        <path
          d="M 251.000,174.500 C 253.471,175.580 253.378,175.752 256.000,176.500"
          strokeWidth="3.745"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
        ></path>
        <path
          d="M 309.000,143.500 C 306.528,146.801 307.500,147.000 306.000,150.500"
          strokeWidth="3.989"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
        ></path>
        <path
          d="M 306.000,150.500 C 303.850,158.318 305.028,157.301 306.000,164.500"
          strokeWidth="3.310"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
        ></path>
        <path
          d="M 306.000,164.500 C 309.326,170.072 307.850,169.818 314.000,173.500"
          strokeWidth="3.298"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
        ></path>
        <path
          d="M 314.000,173.500 C 317.471,174.618 316.826,175.572 321.000,175.500"
          strokeWidth="3.722"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
        ></path>
        <path
          d="M 321.000,175.500 C 323.837,177.427 323.471,176.118 326.000,176.500"
          strokeWidth="4.459"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
        ></path>
        <path
          d="M 326.000,176.500 C 330.526,173.032 330.837,174.427 335.000,169.500"
          strokeWidth="3.566"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
        ></path>
        <path
          d="M 335.000,169.500 C 340.104,165.623 340.026,165.532 345.000,161.500"
          strokeWidth="3.308"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
        ></path>
        <path
          d="M 399.000,70.500 C 394.738,72.940 395.500,73.500 392.000,76.500"
          strokeWidth="4.844"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
        ></path>
        <path
          d="M 392.000,76.500 C 390.546,80.020 389.738,79.440 389.000,83.500"
          strokeWidth="4.130"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
        ></path>
        <path
          d="M 389.000,83.500 C 384.520,93.509 384.546,93.520 380.000,103.500"
          strokeWidth="2.868"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
        ></path>
        <path
          d="M 380.000,103.500 C 373.799,114.102 375.020,114.509 370.000,125.500"
          strokeWidth="2.463"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
        ></path>
        <path
          d="M 370.000,125.500 C 367.168,136.937 366.299,136.602 365.000,148.500"
          strokeWidth="2.389"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
        ></path>
        <path
          d="M 365.000,148.500 C 362.520,160.962 362.668,160.937 361.000,173.500"
          strokeWidth="2.297"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
        ></path>
        <path
          d="M 361.000,173.500 C 360.735,177.519 360.520,177.462 361.000,181.500"
          strokeWidth="3.152"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
        ></path>
        <path
          d="M 361.000,181.500 C 359.703,186.586 361.235,185.019 362.000,188.500"
          strokeWidth="4.047"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
        ></path>
        <path
          d="M 362.000,188.500 C 367.519,189.934 365.703,191.586 373.000,191.500"
          strokeWidth="4.161"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
        ></path>
        <path
          d="M 373.000,191.500 C 377.898,193.694 378.019,192.934 383.000,194.500"
          strokeWidth="3.663"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
        ></path>
        <path
          d="M 383.000,194.500 C 387.532,194.819 387.398,195.194 392.000,194.500"
          strokeWidth="3.674"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
        ></path>
        <path
          d="M 392.000,194.500 C 395.950,195.470 394.532,194.319 397.000,193.500"
          strokeWidth="4.143"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
        ></path>
        <path
          d="M 397.000,193.500 C 400.000,186.459 399.950,187.970 400.000,179.500"
          strokeWidth="3.380"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
        ></path>
        <path
          d="M 400.000,179.500 C 400.061,172.974 400.000,173.959 397.000,168.500"
          strokeWidth="3.313"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
        ></path>
        <path
          d="M 397.000,168.500 C 392.448,163.224 393.561,163.474 387.000,160.500"
          strokeWidth="3.239"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
        ></path>
        <path
          d="M 387.000,160.500 C 383.992,160.324 384.448,159.224 381.000,160.500"
          strokeWidth="4.172"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
        ></path>
        <path
          d="M 381.000,160.500 C 374.461,159.138 375.492,160.824 370.000,161.500"
          strokeWidth="4.223"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
        ></path>
        <path
          d="M 433.000,189.500 C 427.667,185.833 428.000,185.500 423.000,181.500"
          strokeWidth="4.616"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
        ></path>
        <path
          d="M 423.000,181.500 C 420.491,179.296 420.667,179.333 419.000,176.500"
          strokeWidth="4.232"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
        ></path>
        <path
          d="M 419.000,176.500 C 416.840,171.559 416.491,171.796 415.000,166.500"
          strokeWidth="3.647"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
        ></path>
        <path
          d="M 415.000,166.500 C 412.070,160.651 412.840,160.559 411.000,154.500"
          strokeWidth="3.278"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
        ></path>
        <path
          d="M 411.000,154.500 C 411.000,149.000 410.070,149.151 411.000,143.500"
          strokeWidth="3.373"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
        ></path>
        <path
          d="M 411.000,143.500 C 411.000,138.500 411.000,138.500 411.000,133.500"
          strokeWidth="3.489"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
        ></path>
        <path
          d="M 411.000,133.500 C 411.000,128.000 411.000,128.000 411.000,122.500"
          strokeWidth="3.379"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
        ></path>
        <path
          d="M 411.000,122.500 C 411.000,118.000 411.000,118.000 411.000,113.500"
          strokeWidth="3.583"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
        ></path>
        <path
          d="M 411.000,113.500 C 411.000,109.000 411.000,109.000 411.000,104.500"
          strokeWidth="3.649"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
        ></path>
        <path
          d="M 411.000,104.500 C 410.282,100.853 411.000,101.000 411.000,97.500"
          strokeWidth="3.877"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
        ></path>
        <path
          d="M 411.000,97.500 C 412.301,93.898 411.782,93.853 414.000,90.500"
          strokeWidth="3.831"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
        ></path>
        <path
          d="M 414.000,90.500 C 415.192,87.760 415.301,87.898 417.000,85.500"
          strokeWidth="4.074"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
        ></path>
        <path
          d="M 417.000,85.500 C 418.952,82.114 419.192,82.760 422.000,80.500"
          strokeWidth="4.003"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
        ></path>
        <path
          d="M 422.000,80.500 C 427.857,77.617 427.452,77.614 434.000,76.500"
          strokeWidth="3.358"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
        ></path>
        <path
          d="M 434.000,76.500 C 439.143,75.566 438.857,75.617 444.000,76.500"
          strokeWidth="3.485"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
        ></path>
        <path
          d="M 444.000,76.500 C 452.845,77.525 452.143,78.066 460.000,81.500"
          strokeWidth="2.933"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
        ></path>
        <path
          d="M 460.000,81.500 C 465.605,86.389 466.345,85.025 471.000,91.500"
          strokeWidth="2.980"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
        ></path>
        <path
          d="M 471.000,91.500 C 475.731,94.973 475.105,95.389 479.000,99.500"
          strokeWidth="3.248"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
        ></path>
        <path
          d="M 479.000,99.500 C 482.257,104.271 482.231,103.973 484.000,109.500"
          strokeWidth="3.292"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
        ></path>
        <path
          d="M 484.000,109.500 C 484.749,113.484 485.257,113.271 485.000,117.500"
          strokeWidth="3.642"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
        ></path>
        <path
          d="M 485.000,117.500 C 486.172,121.985 485.249,121.484 485.000,125.500"
          strokeWidth="4.220"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
        ></path>
        <path
          d="M 485.000,125.500 C 483.485,128.672 484.172,127.985 481.000,129.500"
          strokeWidth="4.220"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
        ></path>
        <path
          d="M 481.000,129.500 C 477.000,129.500 477.485,130.672 473.000,129.500"
          strokeWidth="3.936"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
        ></path>
        <path
          d="M 473.000,129.500 C 467.788,130.398 468.000,129.500 463.000,129.500"
          strokeWidth="3.591"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
        ></path>
        <path
          d="M 463.000,129.500 C 459.942,128.105 459.788,128.898 457.000,126.500"
          strokeWidth="4.300"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
        ></path>
        <path
          d="M 457.000,126.500 C 451.754,124.239 454.442,125.105 452.000,123.500"
          strokeWidth="4.784"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
        ></path>
        <path
          d="M 452.000,123.500 C 455.187,122.605 452.254,122.739 458.000,123.500"
          strokeWidth="5.086"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
        ></path>
        <path
          d="M 458.000,123.500 C 466.533,126.060 466.187,126.105 474.000,130.500"
          strokeWidth="4.043"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
        ></path>
        <path
          d="M 474.000,130.500 C 484.685,137.764 485.033,137.060 495.000,145.500"
          strokeWidth="2.580"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
        ></path>
        <path
          d="M 495.000,145.500 C 499.301,147.801 498.685,148.264 502.000,151.500"
          strokeWidth="3.201"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
        ></path>
        <path
          d="M 502.000,151.500 C 514.094,166.080 512.801,166.301 522.000,182.500"
          strokeWidth="2.048"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
        ></path>
        <path
          d="M 522.000,182.500 C 526.371,193.824 527.094,193.080 528.000,205.500"
          strokeWidth="2.248"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
        ></path>
        <path
          d="M 528.000,205.500 C 530.400,216.165 529.371,215.324 528.000,225.500"
          strokeWidth="2.473"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
        ></path>
        <path
          d="M 528.000,225.500 C 525.166,234.848 525.900,233.665 519.000,240.500"
          strokeWidth="2.619"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
        ></path>
        <path
          d="M 519.000,240.500 C 511.913,245.418 513.166,245.848 504.000,247.500"
          strokeWidth="2.829"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
        ></path>
        <path
          d="M 504.000,247.500 C 492.546,250.297 492.913,250.418 481.000,250.500"
          strokeWidth="2.434"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
        ></path>
        <path
          d="M 481.000,250.500 C 463.705,251.357 464.046,250.797 447.000,248.500"
          strokeWidth="2.012"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
        ></path>
        <path
          d="M 447.000,248.500 C 425.937,243.230 425.705,244.857 405.000,237.500"
          strokeWidth="1.691"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
        ></path>
        <path
          d="M 405.000,237.500 C 378.464,230.125 378.437,230.230 352.000,222.500"
          strokeWidth="1.418"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
        ></path>
        <path
          d="M 352.000,222.500 C 319.919,211.311 319.464,213.125 287.000,203.500"
          strokeWidth="1.202"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
        ></path>
        <path
          d="M 287.000,203.500 C 231.206,190.854 231.419,190.311 175.000,180.500"
          strokeWidth="1.125"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
        ></path>
        <path
          d="M 175.000,180.500 C 136.009,174.442 136.206,173.354 97.000,168.500"
          strokeWidth="1.125"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
        ></path>
      </svg>
    </div>
  )
}
