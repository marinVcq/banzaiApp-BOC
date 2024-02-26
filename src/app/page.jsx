import Menu from './components/Menu';

const Dashboard = () => {
  const menus = [
    {
      name: 'Gestion',
      items: [
        { label: 'Ouvrir la Caisse', path: '/item1' },
        { label: 'Cloturer la caisse', path: '/item2' },
        { label: 'Tickets de caisse', path: '/item2' },
        { label: 'Ajouter un client', path: '/item2' },
        { label: 'Ajouter un fournisseur', path: '/item2' },
        { label: 'Ajouter un produit', path: '/item2' },
        { label: 'Achat aux fournisseurs', path: '/item2' },
        { label: 'Retour client', path: '/item2' },
      ],
    },
    {
      name: 'Statistique',
      items: [
        { label: 'Vente', path: '/item3' },
        { label: 'Achat', path: '/item3' },
        { label: 'Clientèle', path: '/item3' },
        { label: 'Devis', path: '/item3' },
      ],
    },
    {
      name: 'Paramètre',
      items: [
        { label: 'Entreprise', path: '/item3' },
        { label: 'Catégorie', path: '/item4' },
        { label: 'Utilisateur', path: '/item4' },
        { label: 'Sauvegarde', path: '/item4' },
        { label: 'Fidélité', path: '/item4' },
        { label: 'TVA', path: '/item4' },
        { label: 'Facture', path: '/item4' },
        { label: 'Tickets de caisse', path: '/item4' },
      ],
    },
    
    // Add more menus as needed
  ];

  return (
    <div id='dashboard-page' className='bg-gray-50 flex min-w-screen min-h-screen items-start pt-20 justify-center gap-10' >
      {menus.map((menu, index) => (
        <Menu key={index} name={menu.name} items={menu.items} />
      ))}
    </div>
  );
};

export default Dashboard;
