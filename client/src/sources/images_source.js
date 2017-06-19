export function newTag({ label }) {
  return {
    label: label || 'missing description',
  };
}

export function tag({ id, label }) {
  return {
    id: id || 0,
    label: label || 'missing description',
  };
}

export function getAll() {
  return [
    {
      id: 1,
      title: 'test1',
      description: 'testDesc',
      license: 'MIT',
    },
    {
      id: 2,
      title: 'test2',
      description: 'testDesc',
      license: 'MIT',
    },
    {
      id: 3,
      title: 'test13',
      description: 'testDesc',
      license: 'MIT',
    },
    {
      id: 4,
      title: 'test4',
      description: 'testDesc',
      license: 'MIT',
    },
  ];
}
