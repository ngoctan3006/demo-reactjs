import { FC } from 'react';

const CenterItemDemo: FC = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="w-[800px] flex justify-center p-2 my-10 rounded-xl border-green-400 border flex-wrap">
        {Array.from({ length: 20 }).map((_, idx) => (
          <div
            key={idx}
            className="w-[100px] h-[100px] flex justify-center items-center bg-gray-300 m-2 rounded-sm"
          >
            {idx + 1}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CenterItemDemo;
