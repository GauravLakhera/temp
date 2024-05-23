import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col md:flex-row justify-around text-sm">
      <div className="bg-black  p-10 text-white flex">
        <div className=" p-2">
          <h1 className="font-thin text-gray-200 hover:underline">ABOUT</h1>
          <div className=" ml-1">
            <ul>
              <li className="hover:underline">Contact us</li>
              <li className="hover:underline">About us</li>
              <li className="hover:underline">Carrers</li>
              <li className="hover:underline">Flipkart stories</li>
              <li className="hover:underline">Press</li>
              <li className="hover:underline">Coporate information</li>
            </ul>
          </div>
        </div>
        <div className=" p-2">
          <h1 className="font-thin text-gray-200 hover:underline">
            GROUP COMPAINES
          </h1>
          <div className=" ml-1">
            <ul>
              <li className="hover:underline">Contact us</li>
              <li className="hover:underline">About us</li>
              <li className="hover:underline">Carrers</li>
              <li className="hover:underline">Flipkart stories</li>
              <li className="hover:underline">Press</li>
              <li className="hover:underline">Coporate information</li>
            </ul>
          </div>
        </div>
        <div className=" p-2">
          <h1 className="font-thin text-gray-200 hover:underline">HELP</h1>
          <div className=" ml-1">
            <ul>
              <li className="hover:underline">Contact us</li>
              <li className="hover:underline">About us</li>
              <li className="hover:underline">Carrers</li>
              <li className="hover:underline">Flipkart stories</li>
              <li className="hover:underline">Press</li>
              <li className="hover:underline">Coporate information</li>
            </ul>
          </div>
        </div>
        <div className=" p-2">
          <h1 className="font-thin text-gray-200 hover:underline">
            CONSUMER POLICY
          </h1>
          <div className=" ml-1">
            <ul>
              <li className="hover:underline">Contact us</li>
              <li className="hover:underline">About us</li>
              <li className="hover:underline">Carrers</li>
              <li className="hover:underline">Flipkart stories</li>
              <li className="hover:underline">Press</li>
              <li className="hover:underline">Coporate information</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex justify-around md:justify-end bg-black p-10 text-white">
        <div className=" p-2 md:w-2/12 w-5/12">
          <h1 className="font-thin text-gray-200 hover:underline">Mail us </h1>
          <div className=" ml-1">
            {" "}
            Vaishnavi Summit, Ground Floor, 7th Main, 80 Feet Road, 3rd Block,
            Koramangala Industrial Layout, Bangalore KA IN 560034.
          </div>
          <div >
<h1 className="font-extralight  text-gray-200 mt-2">Social</h1>
<div>

</div>
          </div>
        </div>
        <div className=" p-2 md:w-2/12 w-5/12">
          <h1 className="font-thin text-gray-200 hover:underline">Registration office </h1>
          <div className=" ml-1">
            Vaishnavi Summit, Ground Floor, 7th Main, 80 Feet Road, 3rd Block,
            Koramangala Industrial Layout, Bangalore KA IN 560034.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
