import React, { useState } from "react";

import { Form, Button, Card } from "react-bootstrap";
import DropdownTreeSelect from "react-dropdown-tree-select";
import "react-dropdown-tree-select/dist/styles.css";

export default function App() {
  const data = {
    label: "Select All",
    value: "All",
    children: [
      {
        label: "Manufacturing",
        value: "1",
        children: [
          {
            label: "Construction materials",
            value: "19"
          },
          {
            label: "Electronics and Optics",
            value: "18"
          },
          {
            label: "Food and Beverage",
            value: "6",
            children: [
              {
                label: "Bakery & confectionery products",
                value: "342"
              },
              {
                label: "Beverages",
                value: "43"
              },
              {
                label: "Fish & fish products",
                value: "42"
              },
              {
                label: "Meat & meat products",
                value: "40"
              },
              {
                label: "Milk & dairy products",
                value: "39"
              },
              {
                label: "Other",
                value: "437"
              },
              {
                label: "Sweets & snack food",
                value: "378"
              }
            ]
          },
          {
            label: "Furniture",
            value: "13",
            children: [
              {
                label: "Bathroom/sauna",
                value: "389"
              },
              {
                label: "Bedroom",
                value: "385"
              },
              {
                label: "Children’s room",
                value: "390"
              },
              {
                label: "Kitchen",
                value: "98"
              },
              {
                label: "Living room",
                value: "101"
              },
              {
                label: "Office",
                value: "392"
              },
              {
                label: "Other (Furniture)",
                value: "394"
              },
              {
                label: "Outdoor",
                value: "341"
              },
              {
                label: "Project furniture",
                value: "99"
              }
            ]
          },
          {
            label: "Machinery",
            value: "12",
            children: [
              {
                label: "Machinery components",
                value: "94"
              },
              {
                label: "Machinery equipment/tools",
                value: "91"
              },
              {
                label: "Manufacture of machinery",
                value: "224"
              },
              {
                label: "Maritime",
                value: "97",
                children: [
                  {
                    label: "Aluminium and steel workboats",
                    value: "271"
                  },
                  {
                    label: "Boat/Yacht building",
                    value: "269"
                  },
                  {
                    label: "Ship repair and conversion",
                    value: "230"
                  }
                ]
              },
              {
                label: "Metal structures",
                value: "93"
              },
              {
                label: "Other",
                value: "508"
              },
              {
                label: "Repair and maintenance service",
                value: "227"
              }
            ]
          },
          {
            label: "Metalworking",
            value: "11",
            children: [
              {
                label: "Construction of metal structures",
                value: "67"
              },
              {
                label: "Houses and buildings",
                value: "263"
              },
              {
                label: "Metal products",
                value: "267"
              },
              {
                label: "Metal works",
                value: "542",
                children: [
                  {
                    label: "CNC-machining",
                    value: "75"
                  },
                  {
                    label: "Forgings, Fasteners",
                    value: "62"
                  },
                  {
                    label: "MIG, TIG, Aluminum welding",
                    value: "66"
                  },
                  {
                    label: "Gas, Plasma, Laser cutting",
                    value: "69"
                  }
                ]
              }
            ]
          },
          {
            label: "Plastic and Rubber",
            value: "9",
            children: [
              {
                label: "Packaging",
                value: "54"
              },
              {
                label: "Plastic goods",
                value: "556"
              },
              {
                label: "Plastic processing technology",
                value: "559",
                children: [
                  {
                    label: "Blowing",
                    value: "55"
                  },
                  {
                    label: "Moulding",
                    value: "57"
                  },
                  {
                    label: "Plastics welding and processing",
                    value: "53"
                  }
                ]
              },
              {
                label: "Plastic profiles",
                value: "560"
              }
            ]
          },
          {
            label: "Printing",
            value: "5",
            children: [
              {
                label: "Advertising",
                value: "148"
              },
              {
                label: "Book/Periodicals printing",
                value: "150"
              },
              {
                label: "Labelling and packaging printing",
                value: "145"
              }
            ]
          },
          {
            label: "Textile and Clothing",
            value: "7",
            children: [
              {
                label: "Clothing",
                value: "44"
              },
              {
                label: "Textile",
                value: "45"
              }
            ]
          },
          {
            label: "Wood",
            value: "8",
            children: [
              {
                label: "Other (Wood)",
                value: "337"
              },
              {
                label: "Wooden building materials",
                value: "51"
              },
              {
                label: "Wooden houses",
                value: "47"
              }
            ]
          }
        ]
      },
      {
        label: "Other",
        value: "3",
        children: [
          {
            label: "Creative industries",
            value: "37"
          },
          {
            label: "Energy technology",
            value: "29"
          },
          {
            label: "Environment",
            value: "33"
          }
        ]
      },
      {
        label: "Service",
        value: "2",
        children: [
          {
            label: "Business services",
            value: "25"
          },
          {
            label: "Engineering",
            value: "35"
          },
          {
            label: "Information Technology and Telecommunications",
            value: "28",
            children: [
              {
                label: "Data processing, Web portals, E-marketing",
                value: "581"
              },
              {
                label: "Programming, Consultancy",
                value: "576"
              },
              {
                label: "Software, Hardware",
                value: "121"
              },
              {
                label: "Telecommunications",
                value: "122"
              }
            ]
          },
          {
            label: "Tourism",
            value: "22"
          },
          {
            label: "Translation services",
            value: "141"
          },
          {
            label: "Transport and Logistics",
            value: "21",
            children: [
              {
                label: "Air",
                value: "111"
              },
              {
                label: "Rail",
                value: "114"
              },
              {
                label: "Road",
                value: "112"
              },
              {
                label: "Water",
                value: "113"
              }
            ]
          }
        ]
      }
    ]
  };
  let nodes = [];
  const [name, setName] = useState("");
  const [sector, setSector] = useState([]);
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [nameError, setNameError] = useState("");
  const [nodeError, setNodeError] = useState("");
  const [isDataUpdated, setDataUpdated] = useState(false);
  const [isError, hasError] = useState(false);

  const onNameChange = e => {
    setName(e.target.value);
  };

  const onNodeChange = (currentNode, selectedNodes) => {
    nodes = [];
    selectedNodes.forEach(element => {
      nodes.push({
        label: element.label,
        value: element.value
      });
    });
  };

  const handleClick = async event => {
    let errorOccurred = false;
    event.preventDefault();
    if (!name) {
      setNameError("Please enter your name here");
      return;
    } else {
      setNameError("");
    }
    if (nodes.length === 0) {
      setNodeError("Please select the Sector");
      return;
    } else {
      setNodeError("");
    }

    const response = await fetch(`${process.env.REACT_APP_API_URL}/v1/helmes`, {
      crossDomain: true,
      method: "POST",
      headers: {
        language: "eng",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: name,
        sector: nodes,
        acceptedTerms: true
      })
    }).then(response => {
      setDataUpdated(response.ok)
      hasError(false);
      errorOccurred = !response.ok;
      return response.json();
    }).catch((error) => {
      hasError(true);
      errorOccurred = true;
      setDataUpdated(false)
    });
    if(!errorOccurred) {
      setName(response.name);
      setSector(response.sector);
      setAcceptedTerms(response.acceptedTerms);
    }
    
  };

  const fetchAndModifySector = sectors => {
    sectors.forEach(sector => {
      const findAndSetSector = sectorsData => {
        sectorsData = sectorsData.children;
        if (sectorsData) {
          for (let i = 0; i < sectorsData.length; i++) {
            if (
              sectorsData[i].label === sector.label &&
              sectorsData[i].value === sector.value
            ) {
              sectorsData[i].checked = true;
              break;
            } else {
              findAndSetSector(sectorsData[i]);
            }
          }
        }
      };

      const sectorsData = data;
      if (
        sectorsData.label === sector.label &&
        sectorsData.value === sector.value
      ) {
        sectorsData.checked = true;
      } else {
        findAndSetSector(sectorsData);
      }
    });
    return data;
  };

  const renderNameError = () => {
    if (nameError) {
      return <div className="invalid-feedback d-block">{nameError}</div>;
    }
    return null;
  };

  const renderNodeError = () => {
    if (nodeError) {
      return <div className="invalid-feedback d-block">{nodeError}</div>;
    }
    return null;
  };

  return (
      <Card style={{ width: "40rem" }}>
        <Card.Body>
          <Card.Title>
            Please enter your name and pick the Sectors you are currently
            involved in.
          </Card.Title>
          <Form onSubmit={event => handleClick(event)}>
            <Form.Group controlId="formBasicName" style={{ width: "34%" }}>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter full name"
                name="name"
                defaultValue={name}
                onChange={onNameChange}
              />
              {renderNameError()}
            </Form.Group>

            <Form.Group controlId="formSectors">
              <Form.Label>Sectors</Form.Label>
              <DropdownTreeSelect
                data={sector ? fetchAndModifySector(sector) : data}
                onChange={onNodeChange}
              />
              {renderNodeError()}
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check checked={acceptedTerms}>
                <Form.Check.Input required />
                <Form.Check.Label>Agree to terms</Form.Check.Label>
              </Form.Check>
            </Form.Group>
            <Button variant="primary" type="click">
              Save
            </Button>
          </Form>
          <br/>
          <h6 style={{ color: "#fe2222" }}>{isDataUpdated? 'The data has been updated': ''} </h6>
          <h6 style={{ color: "#fe2222" }}>{isError? 'Error Occured!!!': ''} </h6>
        </Card.Body>
      </Card>
  );
}
