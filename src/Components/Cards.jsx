import { FaMapMarkerAlt } from "react-icons/fa";
function Card(props) {
  return (
    <div className="px-12 pt-10 pb-6 flex items-center gap-8">
      <div className="flex-shrink-0">
        <img
          className="h-[300px] w-[220px] object-cover rounded-lg"
          src={props.imageUrl}
          alt=""
        />
      </div>
      <div>
        <div className="flex items-center gap-1 text-xl mb-3">
          <FaMapMarkerAlt color="#F55A5A" />
          <h3 className="ml-1 mr-3 tracking-widest uppercase">
            {props.location}
          </h3>
          <a
            href={props.googleMapsUrl}
            target="_blank"
            className="underline text-gray-400 "
          >
            View on Google Maps
          </a>
        </div>
        <h2 className="text-4xl font-bold mb-6">{props.title}</h2>
        <p className="font-bold mb-2 ">
          {props.startDate} - {props.endDate}
        </p>
        <p>{props.description}</p>
      </div>
    </div>
  );
}

export default Card;
