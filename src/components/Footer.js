export default function Footer({ icon, title, children }) {
  return (
    <div className="p-6 bg-white rounded-lg shadow">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="font-bold mb-2">{title}</h3>
      <p>{children}</p>
      FOOTER IS HERE
    </div>
  );
}