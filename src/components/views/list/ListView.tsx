'use client';

import React from 'react';

import { ImageWithFallback } from '@components';
import grid from '@assets/images/icons/list/grid.svg';
import gridMuted from '@assets/images/icons/list/grid-muted.svg';
import list from '@assets/images/icons/list/List.svg';
import listMuted from '@assets/images/icons/list/List-muted.svg';

interface ListViewProps {
  listView: boolean;
  setListView: (list: boolean) => void;
  title?: string;
}
const ListView = (props: ListViewProps) => {
  const { listView, title, setListView } = props;
  return (
    <div className="d-flex">
      <span className="text-muted p-1 fs-14 me-2">{title}</span>
      <div className="border p-1 rounded me-2">
        <a onClick={() => setListView(false)} className={` me-1 view-mode ${listView ? '' : 'active'}`}>
          <ImageWithFallback src={listView ? gridMuted : grid} alt="grid view" />
        </a>
      </div>
      <div className="border p-1 rounded">
        <a onClick={() => setListView(true)} className={`me-1 view-mode  ${listView ? 'active' : ''}`}>
          <ImageWithFallback src={listView ? list : listMuted} alt="list view" />
        </a>
      </div>
    </div>
  );
};

export default ListView;
