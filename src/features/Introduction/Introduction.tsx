const Introduction = () => {
  return (
    <div className="flex flex-col gap-y-5 items-center border-2 border-red-900 md:px-8">
      <div className="space-y-3 md:px-10 border-2 border-pink-500">
        <h4 className="text-center text-base leading-6 md:leading-4 font-semibold text-indigo-700">
          Pricing Tiers
        </h4>
        <h1 className="text-center text-3xl md:text-5xl leading-7.5 md:leading-12 font-semibold">
          Fit for all your needs
        </h1>
      </div>
      <p className="text-center text-lg leading-4.5 text-neutral-600 md:text-xl md:leading-5 border-2 border-amber-500">
        Pick the plan that suits you today and step up your demands grow - our
        flexible options have your journey mapped out.
      </p>
    </div>
  );
};

export default Introduction;
