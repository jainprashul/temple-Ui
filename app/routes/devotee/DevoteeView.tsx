import type { Route } from './+types/DevoteeView';
import { devoteeService } from 'services/devoteeService';

export function meta(_: Route.MetaArgs) {
  return [
    { title: "Devotee" },
    { name: "description", content: "Devotee details" },
  ];
}

export async function clientLoader({
  params,
}: Route.ClientLoaderArgs) {
  if(!params.id) return null;
  const product = devoteeService.get(params.id)
  return product;
}


const DevoteeView = ({ loaderData }: Route.ComponentProps) => {


  return (
    <div>
      <h3 className="text-2xl font-semibold">Devotee</h3>
      <hr />
      <div className="space-y-2 w-1/3">
        <table className="table w-full">
          <tr>
            <td>Name</td>
            <td>{loaderData?.name}</td>
          </tr>
          <tr>
            <td>Phone</td>
            <td>{loaderData?.phone}</td>
          </tr>
          <tr>
            <td>Address</td>
            <td>{loaderData?.address}</td>
          </tr>
        </table>

      </div>

    </div>
  )
}

export default DevoteeView