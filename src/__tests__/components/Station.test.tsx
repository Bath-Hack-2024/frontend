import { render, screen } from "@testing-library/react";
import Station from "@/components/Station";

describe("Station", () => {
  test("renders station with correct props", () => {
    const stationProps = {
      name: "London Station",
      lat: 51.5074,
      lng: 0.1278
    };
    
    render(<Station {...stationProps} />);
    const stationNameElement = screen.getByText(stationProps.name);
    const locationElement = screen.getByText(`Latitude: ${stationProps.lat}, Longitude: ${stationProps.lng}`);

    expect(stationNameElement).toBeInTheDocument();
    expect(locationElement).toBeInTheDocument();
  });
});