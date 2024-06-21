const Section = ({ title, children }) => (
  <div className="border border-about-bg p-6 rounded-lg space-y-4">
    <div className="flex  space-x-2">
      <span className="text-blue-400">✦</span>
      <h2 className="text-xl font-semibold">{title}</h2>
    </div>
    {children}
  </div>
);

export default Section;
