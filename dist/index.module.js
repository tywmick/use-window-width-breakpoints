import{useState as e,useEffect as s}from"react";import l from"lodash.debounce";const m={xs:0,sm:576,md:768,lg:992,xl:1200};export default function(r=m){if(void 0===r.sm)throw new TypeError("sm breakpoint is required.");if(void 0===r.lg)throw new TypeError("lg breakpoint is required.");if(void 0!==r.xs&&"number"!=typeof r.xs||"number"!=typeof r.sm||void 0!==r.md&&"number"!=typeof r.md||"number"!=typeof r.lg||void 0!==r.xl&&"number"!=typeof r.xl)throw new TypeError("Breakpoints must be numbers.");if(0!==r.xs&&0!==r.sm)throw new RangeError("Smallest breakpoint must be 0.");if(0===r.xs&&r.sm<=r.xs)throw new RangeError("sm breakpoint must be larger than xs breakpoint.");if(void 0!==r.md){if(r.md<=r.sm)throw new RangeError("md breakpoint must be larger than sm breakpoint.");if(r.lg<=r.md)throw new RangeError("lg breakpoint must be larger than md breakpoint.")}else if(r.lg<=r.sm)throw new RangeError("lg breakpoint must be larger than sm breakpoint.");if(void 0!==r.xl&&r.xl<=r.lg)throw new RangeError("xl breakpoint must be larger than lg breakpoint.");const[n,d]=e(0);let i;return s(()=>{const e=()=>{d(window.innerWidth)};return e(),window.addEventListener("resize",l(e,400)),()=>{window.removeEventListener("resize",l(e,400))}},[]),i=r.xl&&n>=r.xl?"xl":n>=r.lg?"lg":r.md&&n>=r.md?"md":n>=r.sm?"sm":"xs",{...0===r.xs&&{xs:"xs"===i},sm:"sm"===i,...r.md&&{md:"md"===i},lg:"lg"===i,...r.xl&&{xl:"xl"===i},only:{...0===r.xs&&{xs:"xs"===i},sm:"sm"===i,...r.md&&{md:"md"===i},lg:"lg"===i,...r.xl&&{xl:"xl"===i}},up:{...0===r.xs&&{xs:!0},sm:["sm","md","lg","xl"].includes(i),...r.md&&{md:["md","lg","xl"].includes(i)},lg:["lg","xl"].includes(i),...r.xl&&{xl:["xl"].includes(i)}},down:{...0===r.xs&&{xs:["xs"].includes(i)},sm:["xs","sm"].includes(i),...r.md&&{md:["xs","sm","md"].includes(i)},lg:["xs","sm","md","lg"].includes(i),...r.xl&&{xl:!0}},between:{...0===r.xs&&{xs:{sm:["xs","sm"].includes(i),...r.md&&{md:["xs","sm","md"].includes(i)},lg:["xs","sm","md","lg"].includes(i),...r.xl&&{xl:!0}}},sm:{...r.md&&{md:["sm","md"].includes(i)},lg:["sm","md","lg"].includes(i),...r.xl&&{xl:["sm","md","lg","xl"].includes(i)}},...r.md&&{md:{lg:["md","lg"].includes(i),...r.xl&&{xl:["md","lg","xl"].includes(i)}}},...r.xl&&{lg:{xl:["lg","xl"].includes(i)}}}}}
//# sourceMappingURL=index.module.js.map
