import React from 'react'
import type { Route } from './+types/DevoteeView';

type Props = {}


export function meta(_: Route.MetaArgs) {
  return [
    { title: "Devotee" },
    { name: "description", content: "Devotee details" },
  ];
}

const DevoteeView = (_: Props) => {
  return (
    <div>DevoteeView</div>
  )
}

export default DevoteeView