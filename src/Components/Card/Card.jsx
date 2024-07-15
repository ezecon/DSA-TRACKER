import { Card, CardBody, CardFooter, CardHeader, Typography } from '@material-tailwind/react';
import { useNavigate } from 'react-router-dom';

export default function ActionCard({ id, img, name, total, progress = 50 }) {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/List/${id}`);
  };

  // Debugging props
  console.log({ id, img, name, total, progress });

  return (
    <Card className="w-full max-w-xs cursor-pointer border border-gray-300 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300" onClick={handleNavigate}>
      <CardHeader floated={false} className="h-48 md:h-60 overflow-hidden rounded-t-lg">
        <img src={img} alt={name} className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-105" />
      </CardHeader>
      <CardBody className="text-center p-4">
        <Typography variant="h5" color="blue-gray" className="mb-2 font-semibold">
          {name}
        </Typography>
        <Typography color="blue-gray" className="font-medium text-sm md:text-base" textGradient>
          Question Count: {total}
        </Typography>
      </CardBody>
      <CardFooter className="flex flex-col items-center gap-4 pt-4 pb-2">
        <div className="w-full bg-gray-200 rounded-full">
          <div
            className="bg-black text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
            style={{ width: `${progress}%` }}
          >
            {progress}%
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
