import { Button } from '@material-tailwind/react';
import Array from './List';

export default function Arrayindex() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="text-center text-gray-600 font-mono mt-24 water-text">
        <div className='water-text'>
            <h1 className="text-xl whitespace-nowrap">Array Problems</h1>
            <h1 className="text-xl whitespace-nowrap">Array Problems</h1>
        </div>
        <p className="pt-10" id="rotating-text">You can solve all array problem</p>
      </div>
      <div className="container mx-auto px-4 py-8">
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                <th className="py-3 px-6 text-left">ID</th>
                <th className="py-3 px-6 text-left">Problem</th>
                <th className="py-3 px-6 text-left">Status</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 text-sm font-light">
              {Array.problems.map((item, index) => (
                <tr key={index} className="border-b border-gray-200 hover:bg-gray-100">
                  <td className="py-3 px-6 text-left whitespace-nowrap">{item.num}</td>
                  <td className="py-3 px-6 text-left">{item.prob}</td>
                  <td className="py-3 px-6 text-left"><Button className='bg-black'>{item.status}</Button></td>

                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
