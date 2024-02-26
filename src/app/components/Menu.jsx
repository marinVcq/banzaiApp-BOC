import Link from 'next/link';

const Menu = ({ name, items }) => {
  return (
    <div className="border-gray-800 rounded-md min-w-72 min-h-96 border-2">
      <h2 className="text-lg text-center p-2 font-semibold mb-2 bg-gray-800 text-white">{name}</h2>
      <ul>
        {items.map((item, index) => (
          <div key={index} className="m-2">
            <Link className="hover:underline"href={item.path}>{item.label}</Link>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
