import sinon from 'sinon';
export default function initGlobal() {
  if (typeof(window) !== 'undefined') {
    global = window;
  } else if (typeof(global) !== 'undefined') {
    global = global;
  } else {
    global = Function('return this')();
  }

  global.wx = {
    request: async () => {
      return await {
        "data": [{
          "id": 5,
          "first_name": "DeVaughn",
          "height_feet": null,
          "height_inches": null,
          "last_name": "Akoon-Purcell",
          "position": "G-F",
          "team": {
            "id": 8,
            "abbreviation": "DEN",
            "city": "Denver",
            "conference": "West",
            "division": "Northwest",
            "full_name": "Denver Nuggets",
            "name": "Nuggets"
          },
          "weight_pounds": null
        }, {
          "id": 14,
          "first_name": "Ike",
          "height_feet": null,
          "height_inches": null,
          "last_name": "Anigbogu",
          "position": "C",
          "team": {
            "id": 12,
            "abbreviation": "IND",
            "city": "Indiana",
            "conference": "East",
            "division": "Central",
            "full_name": "Indiana Pacers",
            "name": "Pacers"
          },
          "weight_pounds": null
        }, {
          "id": 17,
          "first_name": "Carmelo",
          "height_feet": null,
          "height_inches": null,
          "last_name": "Anthony",
          "position": "F",
          "team": {
            "id": 11,
            "abbreviation": "HOU",
            "city": "Houston",
            "conference": "West",
            "division": "Southwest",
            "full_name": "Houston Rockets",
            "name": "Rockets"
          },
          "weight_pounds": null
        }, {
          "id": 25,
          "first_name": "Ron",
          "height_feet": null,
          "height_inches": null,
          "last_name": "Baker",
          "position": "G",
          "team": {
            "id": 20,
            "abbreviation": "NYK",
            "city": "New York",
            "conference": "East",
            "division": "Atlantic",
            "full_name": "New York Knicks",
            "name": "Knicks"
          },
          "weight_pounds": null
        }, {
          "id": 47,
          "first_name": "Jabari",
          "height_feet": null,
          "height_inches": null,
          "last_name": "Bird",
          "position": "G",
          "team": {
            "id": 2,
            "abbreviation": "BOS",
            "city": "Boston",
            "conference": "East",
            "division": "Atlantic",
            "full_name": "Boston Celtics",
            "name": "Celtics"
          },
          "weight_pounds": null
        }, {
          "id": 67,
          "first_name": "MarShon",
          "height_feet": null,
          "height_inches": null,
          "last_name": "Brooks",
          "position": "G",
          "team": {
            "id": 15,
            "abbreviation": "MEM",
            "city": "Memphis",
            "conference": "West",
            "division": "Southwest",
            "full_name": "Memphis Grizzlies",
            "name": "Grizzlies"
          },
          "weight_pounds": null
        }, {
          "id": 71,
          "first_name": "Lorenzo",
          "height_feet": null,
          "height_inches": null,
          "last_name": "Brown",
          "position": "G",
          "team": {
            "id": 28,
            "abbreviation": "TOR",
            "city": "Toronto",
            "conference": "East",
            "division": "Atlantic",
            "full_name": "Toronto Raptors",
            "name": "Raptors"
          },
          "weight_pounds": null
        }, {
          "id": 86,
          "first_name": "Michael",
          "height_feet": null,
          "height_inches": null,
          "last_name": "Carter-Williams",
          "position": "G",
          "team": {
            "id": 11,
            "abbreviation": "HOU",
            "city": "Houston",
            "conference": "West",
            "division": "Southwest",
            "full_name": "Houston Rockets",
            "name": "Rockets"
          },
          "weight_pounds": null
        }, {
          "id": 90,
          "first_name": "Omri",
          "height_feet": null,
          "height_inches": null,
          "last_name": "Casspi",
          "position": "F",
          "team": {
            "id": 15,
            "abbreviation": "MEM",
            "city": "Memphis",
            "conference": "West",
            "division": "Southwest",
            "full_name": "Memphis Grizzlies",
            "name": "Grizzlies"
          },
          "weight_pounds": null
        }, {
          "id": 1,
          "first_name": "Alex",
          "height_feet": 6,
          "height_inches": 6,
          "last_name": "Abrines",
          "position": "G",
          "team": {
            "id": 21,
            "abbreviation": "OKC",
            "city": "Oklahoma City",
            "conference": "West",
            "division": "Northwest",
            "full_name": "Oklahoma City Thunder",
            "name": "Thunder"
          },
          "weight_pounds": 200
        }, {
          "id": 2,
          "first_name": "Jaylen",
          "height_feet": 6,
          "height_inches": 2,
          "last_name": "Adams",
          "position": "G",
          "team": {
            "id": 1,
            "abbreviation": "ATL",
            "city": "Atlanta",
            "conference": "East",
            "division": "Southeast",
            "full_name": "Atlanta Hawks",
            "name": "Hawks"
          },
          "weight_pounds": 190
        }, {
          "id": 3,
          "first_name": "Steven",
          "height_feet": 7,
          "height_inches": 0,
          "last_name": "Adams",
          "position": "C",
          "team": {
            "id": 21,
            "abbreviation": "OKC",
            "city": "Oklahoma City",
            "conference": "West",
            "division": "Northwest",
            "full_name": "Oklahoma City Thunder",
            "name": "Thunder"
          },
          "weight_pounds": 265
        }, {
          "id": 4,
          "first_name": "Bam",
          "height_feet": 6,
          "height_inches": 10,
          "last_name": "Adebayo",
          "position": "C-F",
          "team": {
            "id": 16,
            "abbreviation": "MIA",
            "city": "Miami",
            "conference": "East",
            "division": "Southeast",
            "full_name": "Miami Heat",
            "name": "Heat"
          },
          "weight_pounds": 255
        }, {
          "id": 6,
          "first_name": "LaMarcus",
          "height_feet": 6,
          "height_inches": 11,
          "last_name": "Aldridge",
          "position": "F",
          "team": {
            "id": 27,
            "abbreviation": "SAS",
            "city": "San Antonio",
            "conference": "West",
            "division": "Southwest",
            "full_name": "San Antonio Spurs",
            "name": "Spurs"
          },
          "weight_pounds": 260
        }, {
          "id": 7,
          "first_name": "Rawle",
          "height_feet": 6,
          "height_inches": 5,
          "last_name": "Alkins",
          "position": "G",
          "team": {
            "id": 5,
            "abbreviation": "CHI",
            "city": "Chicago",
            "conference": "East",
            "division": "Central",
            "full_name": "Chicago Bulls",
            "name": "Bulls"
          },
          "weight_pounds": 225
        }, {
          "id": 8,
          "first_name": "Grayson",
          "height_feet": 6,
          "height_inches": 5,
          "last_name": "Allen",
          "position": "G",
          "team": {
            "id": 29,
            "abbreviation": "UTA",
            "city": "Utah",
            "conference": "West",
            "division": "Northwest",
            "full_name": "Utah Jazz",
            "name": "Jazz"
          },
          "weight_pounds": 198
        }, {
          "id": 10,
          "first_name": "Al-Farouq",
          "height_feet": 6,
          "height_inches": 9,
          "last_name": "Aminu",
          "position": "F",
          "team": {
            "id": 25,
            "abbreviation": "POR",
            "city": "Portland",
            "conference": "West",
            "division": "Northwest",
            "full_name": "Portland Trail Blazers",
            "name": "Trail Blazers"
          },
          "weight_pounds": 220
        }, {
          "id": 11,
          "first_name": "Justin",
          "height_feet": 6,
          "height_inches": 6,
          "last_name": "Anderson",
          "position": "G-F",
          "team": {
            "id": 1,
            "abbreviation": "ATL",
            "city": "Atlanta",
            "conference": "East",
            "division": "Southeast",
            "full_name": "Atlanta Hawks",
            "name": "Hawks"
          },
          "weight_pounds": 230
        }, {
          "id": 12,
          "first_name": "Kyle",
          "height_feet": 6,
          "height_inches": 9,
          "last_name": "Anderson",
          "position": "F",
          "team": {
            "id": 15,
            "abbreviation": "MEM",
            "city": "Memphis",
            "conference": "West",
            "division": "Southwest",
            "full_name": "Memphis Grizzlies",
            "name": "Grizzlies"
          },
          "weight_pounds": 230
        }, {
          "id": 13,
          "first_name": "Ryan",
          "height_feet": 6,
          "height_inches": 10,
          "last_name": "Anderson",
          "position": "F",
          "team": {
            "id": 16,
            "abbreviation": "MIA",
            "city": "Miami",
            "conference": "East",
            "division": "Southeast",
            "full_name": "Miami Heat",
            "name": "Heat"
          },
          "weight_pounds": 240
        }, {
          "id": 119,
          "first_name": "Tyler",
          "height_feet": null,
          "height_inches": null,
          "last_name": "Davis",
          "position": "C",
          "team": {
            "id": 21,
            "abbreviation": "OKC",
            "city": "Oklahoma City",
            "conference": "West",
            "division": "Northwest",
            "full_name": "Oklahoma City Thunder",
            "name": "Thunder"
          },
          "weight_pounds": null
        }, {
          "id": 144,
          "first_name": "Wayne",
          "height_feet": null,
          "height_inches": null,
          "last_name": "Ellington",
          "position": "G",
          "team": {
            "id": 16,
            "abbreviation": "MIA",
            "city": "Miami",
            "conference": "East",
            "division": "Southeast",
            "full_name": "Miami Heat",
            "name": "Heat"
          },
          "weight_pounds": null
        }, {
          "id": 149,
          "first_name": "Keenan",
          "height_feet": null,
          "height_inches": null,
          "last_name": "Evans",
          "position": "G",
          "team": {
            "id": 9,
            "abbreviation": "DET",
            "city": "Detroit",
            "conference": "East",
            "division": "Central",
            "full_name": "Detroit Pistons",
            "name": "Pistons"
          },
          "weight_pounds": null
        }, {
          "id": 179,
          "first_name": "Marcin",
          "height_feet": null,
          "height_inches": null,
          "last_name": "Gortat",
          "position": "C",
          "team": {
            "id": 13,
            "abbreviation": "LAC",
            "city": "LA",
            "conference": "West",
            "division": "Pacific",
            "full_name": "LA Clippers",
            "name": "Clippers"
          },
          "weight_pounds": null
        }, {
          "id": 94,
          "first_name": "Tyson",
          "height_feet": 7,
          "height_inches": 1,
          "last_name": "Chandler",
          "position": "C",
          "team": {
            "id": 14,
            "abbreviation": "LAL",
            "city": "Los Angeles",
            "conference": "West",
            "division": "Pacific",
            "full_name": "Los Angeles Lakers",
            "name": "Lakers"
          },
          "weight_pounds": 240
        }],
        "meta": {
          "total_pages": 124,
          "current_page": 1,
          "next_page": 2,
          "per_page": 25,
          "total_count": 3099
        }
      }
    }
  }
  global.getApp = function() {
    return {
      app: 'app'
    };
  };
}
