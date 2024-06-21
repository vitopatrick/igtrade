"use client";

import React from "react";
import { Chrono } from "react-chrono";
import { CardTitle } from "../ui/card";

const Timeline = () => {
  const items = [
    {
      title: "2019",
      cardTitle: "RJO opens an office in Paris, France",

      media: {
        type: "IMAGE",
        source: {
          url: "https://www.rjobrien.com/wp-content/uploads/2018/08/dubai-3574226_1280.jpg",
        },
      },
    },
    {
      title: "2018",
      cardTitle: "RJO opens an office in Dubai, UAE",

      media: {
        type: "IMAGE",
        source: {
          url: "https://www.rjobrien.com/wp-content/uploads/2018/08/dubai-3574226_1280.jpg",
        },
      },
    },
    {
      title: "2015",
      cardTitle:
        "RJO expands its operations in Europe through the acquisition of The Kyte Group Limited, now known as R.J. O'Brien Europe Limited.",
    },
    {
      title: "2014",
      cardTitle:
        "R.J. O’Brien & Associates celebrates its 100th anniversary year.",
    },
    {
      title: "2013",
      cardTitle:
        "The firm releases its first-ever mobile trading application, RJO Mobile Trader.",

      media: {
        type: "IMAGE",
        source: {
          url: "https://www.rjobrien.com/wp-content/uploads/2013/08/mobile.jpg",
        },
      },
    },
    {
      title: "2012",
      cardTitle:
        "RJO invests in UK operation as a focal point for growth in Europe.",

      media: {
        type: "IMAGE",
        source: {
          url: "https://www.rjobrien.com/wp-content/uploads/2012/08/london.jpg",
        },
      },
    },
    {
      title: "2011",
      cardTitle:
        "RJO CEO Gerald Corcoran testifies before U.S. House Committee on Agriculture on recommendations for strengthening industry’s financial safeguards.",

      media: {
        type: "IMAGE",
        source: {
          url: "https://www.rjobrien.com/wp-content/uploads/2011/08/justice.jpg",
        },
      },
    },
    {
      title: "2010",
      cardTitle:
        "RJO launches R.J. O’Brien & Associates Canada Inc., its first Canadian subsidiary..",
    },
    {
      title: "2009",
      cardTitle:
        "RJO expands business in Asia opening operations in Hong Kong.",

      media: {
        type: "IMAGE",
        source: {
          url: "https://www.rjobrien.com/wp-content/uploads/2009/08/hong-kong-1990268_1280.jpg",
        },
      },
    },
    {
      title: "2006",
      cardTitle:
        "RJO establishes first presence in Asia with a sales representative office in Beijing.",

      media: {
        type: "IMAGE",
        source: {
          url: "https://www.rjobrien.com/wp-content/uploads/2006/08/beijing.jpg",
        },
      },
    },
    {
      title: "2003",
      cardTitle:
        "O’Brien Investment Services, an RJO subsidiary serving self-directed private clients, becomes RJO Futures.",
    },
    {
      title: "2002",
      cardTitle:
        "RJO joins the New York Mercantile Exchange and COMEX (now part of CME Group) and the New York Board of Trade (now ICE Futures U.S.).",

      media: {
        type: "IMAGE",
        source: {
          url: "https://www.rjobrien.com/wp-content/uploads/2002/08/BULL.jpg",
        },
      },
    },
    {
      title: "2000",
      cardTitle: "John W. O’Brien named Chairman of the Board.",
    },
    {
      title: "2000",
      cardTitle: "Robert O’Brien, Sr. named Chairman Emeritus.",
    },
    {
      title: "2000",
      cardTitle: "Robert O’Brien, Jr. named Vice Chairman.",
    },
    {
      title: "2000",
      cardTitle: "Gerald F. Corcoran named Chief Executive Officer.",
    },
    {
      title: "1995",
      cardTitle:
        "RJO joins London International Financial Futures Exchange (Liffe).",
    },
    {
      title: "1992",
      cardTitle:
        "Gerald F. Corcoran named Chief Operating Officer and Director of RJO.",
    },
    {
      title: "1990",
      cardTitle: "RJO joins the Chicago Board of Trade.",
      media: {
        type: "IMAGE",
        source: {
          url: "https://www.rjobrien.com/wp-content/uploads/1990/08/cbot.jpg",
        },
      },
    },
    {
      title: "1989",
      cardTitle:
        "Mayor Richard M. Daley proclaims October 17 as R. J. O’Brien Day in Chicago",
      media: {
        type: "IMAGE",
        source: {
          url: "https://www.rjobrien.com/wp-content/uploads/1989/08/chicago.jpg",
        },
      },
    },
    {
      title: "1987",
      cardTitle:
        "Gerald F. Corcoran joins RJO and is named Chief Financial Officer. Firm has approximately 35 employees.",
    },
    {
      title: "1986",
      cardTitle:
        "John W. O’Brien, Sr., son of Robert J. O’Brien, Sr., named CEO of RJO.",
    },
    {
      title: "1977",
      cardTitle:
        "First live, direct-from-the-floor commodity report in broadcast history: “Bob O’Brien Commodity Report.”",
    },
    {
      title: "1975",
      cardTitle: "Robert O’Brien, Jr. named President of RJO.",
    },
    {
      title: "1975",
      cardTitle: "Robert O’Brien, Sr. named Chairman of the Board of RJO.",
    },
    {
      title: "1972",
      cardTitle:
        "Robert O’Brien, Sr. made Director and Secretary of the new International Monetary Market upon creation of the world’s first financial futures.",
      media: {
        type: "IMAGE",
        source: {
          url: "https://www.rjobrien.com/wp-content/uploads/1972/08/IMM-pit.jpg",
        },
      },
    },
    {
      title: "1969",
      cardTitle:
        "John V. McCarthy company name officially changed to R.J. O’Brien & Associates (RJO).",
    },
    {
      title: "1967",
      cardTitle:
        "Robert O’Brien, Sr. elected Chairman of the Board of CME and served two consecutive one-year terms through 1968.",
    },
    {
      title: "1966",
      cardTitle:
        "An RJO employee, 22-year-old Sandra Stephens, becomes the first woman ever to work on the floor of CME.",
      media: {
        type: "IMAGE",
        source: {
          url: "https://www.rjobrien.com/wp-content/uploads/1966/08/WOMAN.jpg",
        },
      },
    },
    {
      title: "1966",
      cardTitle:
        "Robert O’Brien, Sr. elected Second Vice Chairman of the Board of Governors of the Chicago Mercantile Exchange.",
    },
    {
      title: "1965",
      cardTitle: "First branch office established – Russ Brooks: Harlan, Iowa.",
    },
    {
      title: "1964",
      cardTitle:
        "RJO takes first delivery of the new Live Cattle contract, the first live commodity traded on the CME floor.",
      media: {
        type: "IMAGE",
        source: {
          url: "https://www.rjobrien.com/wp-content/uploads/2018/11/Cattle-Feedlot-Image.jpeg",
        },
      },
    },
    {
      title: "1964",
      cardTitle:
        "Robert O’Brien, Sr. elected to Board of Governors of Chicago Mercantile Exchange (CME) (served continuously from 1964-1977).",
    },
    {
      title: "1963",
      cardTitle: "John V. McCarthy dies.",
    },
    {
      title: "1959",
      cardTitle: "Robert O’Brien, Sr. named President of John V. McCarthy.",
    },
    {
      title: "1952",
      cardTitle:
        "Robert J. O'Brien, Sr., son-in-law of John V. McCarthy, joins firm and begins client and business research. John V. McCarthy & Co. has four employees.",
    },
    {
      title: "1947",
      cardTitle:
        "Geraldine McCarthy, daughter of John V. McCarthy, marries Robert J. O’Brien, Sr.",
      media: {
        type: "IMAGE",
        source: {
          url: "https://www.rjobrien.com/wp-content/uploads/1947/08/MARRIAGE.jpg",
        },
      },
    },
    {
      title: "1919",
      cardTitle:
        "Firm becomes founding member of Chicago Mercantile Exchange (CME) when it is transformed from the Chicago Butter & Egg Board.",
    },
    {
      title: "1914",
      cardTitle:
        "John V. McCarthy & Co. established on October 17 as cash butter and egg house.",
    },
  ];

  return (
    <div>
      <Chrono
        items={items}
        mode="VERTICAL_ALTERNATING"
        hideControls={true}
        theme={{
          primary: "black",
          CardTitle: "black",
          titleColor: "black",
          titleColorActive: "black",
        }}
      />
    </div>
  );
};

export default Timeline;
