import * as React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Essay from "../images/Essay.jpg";
import Womenright from "../images/WomenRights.jpg";
import { Card, Image, Icon, Container, Grid } from "semantic-ui-react";

export class Event extends React.Component {
  render() {
    return (
      <div>
        <Header />

        <header className="header">
          <h4 className="logo1">
            Recent events happening around Southeastern organized by Women in
            Technology{" "}
          </h4>
        </header>

        <Container>
          <Grid>
            <Grid.Column width={8}>
              <Image src={Womenright} className="eventimg" />
            </Grid.Column>
            <Grid.Column width={8}>
              <Image src={Essay} className="eventimg" />
            </Grid.Column>
          </Grid>
        </Container>
        <Footer />
      </div>
    );
  }
}
export default Event;
