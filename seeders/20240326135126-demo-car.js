"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const transmissions = ["Manual", "Automatic", "Automanual", "CVT"];
    const manufactures = [
      "BMW",
      "Lincoln",
      "Ford",
      "Honda",
      "Buick",
      "Chevy",
      "Dodge",
      "Audi",
      "Toyota",
      "Nissan",
    ];
    const types = [
      "Sedan",
      "Convertible",
      "Hatchback",
      "Minivan",
      "Regular Cab Pickup",
      "Extended Cab Pickup",
      "Coupe",
      "Passenger Van",
      "SUV",
      "Crew Cab Pickup",
      "Wagon",
    ];
    const options = [
      "Cruise Control",
      "Tinted Glass",
      "AM/FM Stereo",
      "Keyless Entry",
      "Power Windows",
      "MP3 (Single Disc)",
      "CD (Multi Disc)",
      "Navigation",
      "Bucket Seats",
      "Airbag: Passenger",
      "Airbag: Driver",
      "Power Seats",
      "Airbag: Side",
      "Antilock Brakes",
      "A/C: Rear",
      "Alarm",
      "Alloy Wheels",
      "Power Locks",
      "MP3 (Multi Disc)",
      "Leather Interior",
      "Fog Lights",
      "Memory Seats",
      "Rear Window Defroster",
      "Integrated Phone",
      "Cassette Player",
      "Third Row Seats",
      "Rear Window Wiper",
      "Moonroof/Sunroof",
      "Power Steering",
      "Tow Package",
    ];
    const specs = [
      "200mm front axle",
      "Roof mounted antenna",
      "Cargo compartment cover",
      "Rear bench seat -inc: (3) adjustable headrests",
      "Driver & front passenger second generation airbags w/seatbelt sensors",
      "Front seat belt pretensioners w/load limiters",
      "Rear-seat adjustable head restraints",
      "4-wheel drive",
      "Cloth covered headliner",
      "Front/rear side curtain airbags",
      "160-amp alternator",
      "Compact spare tire",
      "Child seat upper tether anchors",
      "Laminated windshield & front door glass",
      "Front & rear door mounted side curtain airbags",
      "Impact-absorbing steering column",
      "Steel beam side-impact door beams",
      "1.8L DOHC 16-valve I4 engine -inc: engine cover",
      "AM/FM stereo w/CD/MP3 player -inc: aux input",
      "Rear seat heat ducts",
      "Dual visor vanity mirrors",
      "Front wheel drive",
      "First aid kit",
      "Advanced dual-stage front airbags -inc: occupant classification system",
      "Remote fuel-filler door release",
      "5-speed automatic transmission w/OD",
      "Front bucket seats -inc: 8-way pwr driver seat, 4-way pwr passenger seat, pwr driver lumbar",
      "Front seat belt height adjusters",
      "Overhead map lights",
      "Tinted glass",
      "Remote trunk release",
      "Impact-absorbing front/rear crumple zones",
      "Rear child safety door locks",
    ];
    await Promise.all(
      transmissions.map(async (m) => {
        await queryInterface.bulkInsert("transmissions", [
          {
            name: m,
            createdBy: 1,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
        ]);
      })
    );
    await Promise.all(
      manufactures.map(async (m) => {
        await queryInterface.bulkInsert("manufactures", [
          {
            name: m,
            createdBy: 1,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
        ]);
      })
    );
    await Promise.all(
      types.map(async (m) => {
        await queryInterface.bulkInsert("types", [
          {
            name: m,
            createdBy: 1,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
        ]);
      })
    );
    await Promise.all(
      options.map(async (m) => {
        await queryInterface.bulkInsert("options", [
          {
            name: m,
            createdBy: 1,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
        ]);
      })
    );
    await Promise.all(
      specs.map(async (m) => {
        await queryInterface.bulkInsert("specs", [
          {
            name: m,
            createdBy: 1,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
        ]);
      })
    );

    await queryInterface.bulkInsert("cars", [
      {
        model: "F150",
        image: `https://res.cloudinary.com/dtkrxcjrr/image/upload/v1711740457/ff2323359359ae53837f2c853a6124b6.jpg`,
        rent_day: 200000,
        description:
          "Brake assist. Leather-wrapped shift knob. Glove box lamp. Air conditioning w/in-cabin microfilter.",
        year: 2020,
        capacity: 2,
        transmission_id: 1,
        type_id: 1,
        manufacture_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        createdBy: 1,
      },
      {
        model: "X5",
        image: `https://res.cloudinary.com/dtkrxcjrr/image/upload/v1711740457/ff2323359359ae53837f2c853a6124b6.jpg`,
        rent_day: 800000,
        description:
          "Rear passenger map pockets. Electrochromic rearview mirror. Dual chrome exhaust tips. Locking glove box",
        year: 2019,
        capacity: 6,
        transmission_id: 2,
        type_id: 2,
        manufacture_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
        createdBy: 1,
      },
      {
        model: "MKZ",
        image: `https://res.cloudinary.com/dtkrxcjrr/image/upload/v1711740457/ff2323359359ae53837f2c853a6124b6.jpg`,
        rent_day: 900000,
        description:
          "Driver & front passenger map pockets. Direct-type tire pressure monitor system. Cargo area lamp. Glove box lamp.",
        year: 2021,
        capacity: 6,
        transmission_id: 3,
        type_id: 3,
        manufacture_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
        createdBy: 1,
      },
    ]);

    await queryInterface.bulkInsert("option_transactions", [
      {
        car_id: 1,
        option_id: 1,
        createdBy: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        car_id: 1,
        option_id: 2,
        createdBy: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        car_id: 1,
        option_id: 3,
        createdBy: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        car_id: 1,
        option_id: 4,
        createdBy: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        car_id: 2,
        option_id: 1,
        createdBy: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        car_id: 2,
        option_id: 2,
        createdBy: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        car_id: 2,
        option_id: 5,
        createdBy: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        car_id: 2,
        option_id: 6,
        createdBy: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);

    await queryInterface.bulkInsert("spec_transactions", [
      {
        car_id: 1,
        spec_id: 1,
        createdBy: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        car_id: 1,
        spec_id: 2,
        createdBy: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        car_id: 1,
        spec_id: 3,
        createdBy: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        car_id: 1,
        spec_id: 4,
        createdBy: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        car_id: 2,
        spec_id: 1,
        createdBy: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        car_id: 2,
        spec_id: 2,
        createdBy: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        car_id: 2,
        spec_id: 5,
        createdBy: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        car_id: 2,
        spec_id: 6,
        createdBy: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("transmissions", null, {});
    await queryInterface.bulkDelete("manufactures", null, {});
    await queryInterface.bulkDelete("types", null, {});
    await queryInterface.bulkDelete("options", null, {});
    await queryInterface.bulkDelete("specs", null, {});

    await queryInterface.bulkDelete("option_transactions", null, {});
    await queryInterface.bulkDelete("spec_transactions", null, {});

    await queryInterface.bulkDelete("cars", null, {});
  },
};
