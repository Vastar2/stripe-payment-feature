import Image from "next/image";
import map from "../public/map.svg";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-10 bg-gray-50">
      <div className="fixed inset-0 overflow-hidden opacity-75 bg-[#f8fafb]">
        <Image
          alt="World Map"
          src={map}
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
      <main className="flex flex-col items-center flex-1 px-4 sm:px-20 text-center z-10 sm:pt-10">
        <h1 className="text-3xl sm:text-5xl font-bold">Payment failed</h1>
        <p className="mt-4 sm:text-xl text-lg text-gray-700">
          Oops...Something happened during your payment
        </p>
        <section className="border border-gray-300 bg-white rounded-lg shadow-lg mt-6 w-full max-w-[480px] hover:shadow-2xl transition pt-2">
          <div className="p-4 flex flex-col justify-center items-center border-b">
            <div className="flex justify-between w-full items-baseline">
              <div className="w-full text-left flex flex-col">
                <h4 className="font-semibold text-xl mb-2">Contact form</h4>
                <p className=" text-sm text-gray-700 mb-4">
                  Describe to us why the payment might not go through
                </p>
                <form className="w-full">
                  <div className="w-full flex gap-6  mb-4">
                    <label htmlFor="">
                      <p className="font-medium mb-2">First name</p>
                      <input
                        className="black bg-gray-50 text-gray-500 text-left py-2 px-4 rounded-md border-gray-200 border text-sm"
                        type="text"
                      />
                    </label>
                    <label htmlFor=" mb-4">
                      <p className="font-medium mb-2">Second name</p>
                      <input
                        className="black bg-gray-50 text-gray-500 text-left py-2 px-4 rounded-md border-gray-200 border text-sm"
                        type="text"
                      />
                    </label>
                  </div>
                  <label htmlFor="w-full mb-4">
                    <p className="font-medium mb-2">Money amount</p>
                    <input
                      className="black w-full bg-gray-50 text-gray-500 text-left py-2 px-4 rounded-md border-gray-200 border text-sm"
                      type="text"
                    />
                  </label>
                  <p className="mt-2 mb-4 text-red-600">
                    Only numeric values are allowed
                  </p>
                  <label htmlFor="">
                    <p className="font-medium mb-2">Message</p>
                    <textarea className="w-full h-24 bg-gray-50 text-gray-500 text-left py-2 px-4 rounded-md border-gray-200 border text-sm" />
                  </label>
                </form>
              </div>
            </div>
          </div>
          <div className="p-4 gap-4 flex flex-col justify-center items-center border-b">
            <div className="bg-gray-50 text-gray-500 text-left py-2 px-4 rounded-md border-gray-200 border text-sm flex flex-col gap-4">
              <p className="inline-block">
                <span>
                  A tracking number for your item will be sent to your email
                  example@gmail.com
                </span>
              </p>
            </div>
            <button
              className="py-4 px-6 text-lg w-full bg-black text-white rounded-md hover:bg-gray-900"
              onClick={() => alert(`Report is sended`)}
            >
              Send feedback
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ErrorPage;
