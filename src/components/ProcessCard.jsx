export default function ProcessCard({
  title,
  description,
  stepCount,
  imageURL,
  imageAlt,
}) {
  return (
    <div className="card bg-base-100 card-md shadow-sm p-6">
      <div className="flex justify-end">
        <div className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full w-10 h-10 flex items-center justify-center text-sm font-bold">
          {stepCount}
        </div>
      </div>
      <div className="card-body flex items-center">
        <div className="flex h-16 w-16 p-3 bg-linear-to-r from-[#4F39F6]/10 to-[#9514FA]/10 rounded-full mb-4">
          <img src={imageURL} alt={imageAlt} />
        </div>
        <h2 className="card-title text-2xl font-bold">{title}</h2>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
    </div>
  );
}
