const styles = {
  // general
  headText: "font-rajdhani font-bold text-white sm:text-6xl text-4xl",
  normalText: "font-rajdhani font-normal text-[24px] text-siteWhite",
  footerText: "font-rajdhani font-medium text-base text-white",
  infoText: "font-rajdhani font-medium text-lg text-siteViolet cursor-pointer",

  // hoc page
  hocContainer: "min-h-screen flex xl:flex-row flex-col relative",
  hocContentBox:
    "flex flex-1 justify-between bg-siteblack py-8 sm:px-12 px-8 flex-col",
  hocLogo: "w-[160px] h-[52px] object-contain cursor-pointer",
  hocBodyWrapper: "flex-1 flex justify-center flex-col xl:mt-0 my-16",

  // custom input component
  label: "font-rajdhani font-semibold text-2xl text-white mb-3",
  input:
    "bg-siteDimBlack text-white outline-none focus:outline-siteViolet p-4 rounded-md sm:max-w-[50%] max-w-full",

  // custom button component
  btn: "px-4 py-2 rounded-lg bg-siteViolet w-fit text-white font-rajdhani font-bold",
};

export default styles;
