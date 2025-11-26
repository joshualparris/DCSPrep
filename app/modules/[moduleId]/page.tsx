import React from 'react';
import { modules } from '../../../src/data/modules';
import ModuleDetail from '../../../src/components/modules/ModuleDetail';

export default function ModulePage({ params }: { params: { moduleId: string } }) {
  const moduleData = modules.find((m) => m.id === params.moduleId);
  if (!moduleData) return <div className="bg-white p-6 rounded shadow-sm">Module not found.</div>;

  return (
    <div>
      <ModuleDetail moduleData={moduleData} />
    </div>
  );
}
