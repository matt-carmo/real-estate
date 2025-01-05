interface iLocation {
    location_name: string;
    location_id: number;
    parent_location_id?: number;
  }
  export const locations: iLocation[] = [
    {
      location_name: "São Paulo",
      location_id: 1,
    },
    {
      location_name: "Presidente Prudente",
      location_id: 2,
      parent_location_id: 1,
    },
    {
      location_name: "Campinas",
      location_id: 3,
      parent_location_id: 1,
    },
    {
      location_name: "Assis",
      location_id: 4,
      parent_location_id: 2,
    },
    {
      location_name: "Marília",
      location_id: 5,
      parent_location_id: 2,
    },
    {
      location_name: "Ourinhos",
      location_id: 6,
      parent_location_id: 2,
    },
    {
      location_name: "Dracena",
      location_id: 7,
      parent_location_id: 2,
    },
    {
      location_name: "Adamantina",
      location_id: 8,
      parent_location_id: 2,
    },
    {
      location_name: "Teodoro Sampaio",
      location_id: 9,
      parent_location_id: 2,
    },
    {
      location_name: "Paraguaçu Paulista",
      location_id: 10,
      parent_location_id: 2,
    },
  ];