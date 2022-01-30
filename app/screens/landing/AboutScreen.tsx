export default function AboutScreen() {
  return (
    <div className="p-4 mx-auto">
      <h1 className="px-4 text-2xl font-semibold text-left max-w-2xl leading-relaxed md:text-4xl md:leading-loose">
        About.
      </h1>
      <div className="mt-6 text-base font-thin w-4/5 max-w-2xl mx-auto md:text-xl">
        <p className="leading-loose">
          I like to code things from scratch, and enjoy bringing ideas to life
          in the browser.
        </p>
        <br />
        <p className="leading-loose">
          Since beginning my journey as a freelance designer nearly 10 years
          ago, I've done remote work for agencies, consulted for startups, and
          collaborated with talented people to create digital products for both
          business and consumer use.
        </p>
        <br />
        <p className="leading-loose">
          I'm quietly confident, naturally curious, and perpetually working on
          improving my chops one design problem at a time.
        </p>
      </div>
    </div>
  );
}
