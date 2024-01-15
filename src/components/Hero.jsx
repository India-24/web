"use client";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useState } from "react";
import Airtable from "airtable";
const base = new Airtable({ apiKey: `${process.env.AIRTABLE_API_SECRET}` }).base(
  "appWHG3dDhnwnzjOI"
);

export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const records = await base("RSVP").create([
        {
          fields: {
            Email: email,
            Name: name,
          },
        },
      ]);

      records.forEach(function (record) {
        console.log(record.getId());
      });

      console.log("Submitted");
    } catch (err) {
      console.error(err);
    }
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
    console.log("Name:", e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    console.log("Email:", e.target.value);
  };

  return (
    <div key="1" className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="lg:flex lg:items-center lg:justify-between">
              <div className="space-y-2 lg:w-1/2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  Catalyst
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Join us for the biggest teenager hackathon event in Bangalore,
                  India.
                </p>
                <div className="w-full max-w-sm space-y-2">
                  <form
                    className="flex flex-col space-y-2"
                    onSubmit={handleSubmit}
                  >
                    <Input
                      className="max-w-lg flex-1"
                      placeholder="Enter your name"
                      type="text"
                      onChange={handleNameChange}
                    />
                    <Input
                      className="max-w-lg flex-1"
                      placeholder="Enter your email"
                      type="email"
                      onChange={handleEmailChange}
                    />
                    <Button type="submit">RSVP</Button>
                  </form>
                </div>
              </div>
              <div className="mt-8 lg:mt-0 lg:w-1/2">
                <img
                  alt="Hackathon 2024"
                  className="w-full h-64 object-cover lg:h-full lg:rounded-lg"
                  src="https://cloud-at2swbse6-hack-club-bot.vercel.app/0image_creator.jpeg"
                  height={100}
                  style={{
                    aspectRatio: "500/500",
                    objectFit: "cover",
                  }}
                  width={100}
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
