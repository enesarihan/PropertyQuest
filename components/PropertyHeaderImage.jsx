import Image from "next/image";
const PropertyHeaderImage = ({ image }) => {
  return (
    <section>
      <div className="container-xl m-auto">
        <div className="grid grid-cols-1">
          <Image
            src={`/properties/${image}`}
            alt=""
            className="object-cover h-[400px] w-full"
            width="1800"
            height={0}
          />
        </div>
      </div>
    </section>
  );
};

export default PropertyHeaderImage;
