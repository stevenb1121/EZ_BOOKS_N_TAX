// Constants
import { PRIMARY, SECONDARY } from "../Constants";
// MUI Components
import Carousel from "react-material-ui-carousel";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Icon from "@mui/material/Icon";
// MUI Icons
import NavigateNextRoundedIcon from "@mui/icons-material/NavigateNextRounded";
import NavigateBeforeRoundedIcon from "@mui/icons-material/NavigateBeforeRounded";
// React type
import { ReactNode } from "react";

interface CaroselProps {
  id: string;
  slides: {
    header: string;
    description: string;
    img: string;
    icon: ReactNode;
  }[];
}

const Carosel = ({ id, slides }: CaroselProps) => {
  return (
    <div id={id}>
      <Container
        maxWidth={false}
        disableGutters
        sx={{ display: "flex", flexDirection: "column" }}
      >
        <Container
          maxWidth={false}
          disableGutters
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            bgcolor: PRIMARY,
          }}
        >
          <Typography textAlign={"center"} color={SECONDARY} variant="h3">
            Learn More About What We Can Do For You
          </Typography>
        </Container>
        <Container maxWidth={false} disableGutters sx={{ bgcolor: PRIMARY }}>
          <Carousel
            animation="slide"
            duration={750}
            interval={10000}
            navButtonsAlwaysVisible={true}
            NextIcon={<NavigateNextRoundedIcon />}
            PrevIcon={<NavigateBeforeRoundedIcon />}
            indicatorContainerProps={{ style: { marginBottom: "1rem" } }}
          >
            {slides.map(({ header, description, img, icon }, index) => (
              <Container
                key={index}
                maxWidth={false}
                disableGutters
                sx={{
                  color: SECONDARY,
                  display: "flex",
                  bgcolor: PRIMARY,
                  alignItems: "center",
                  justifyContent: "center",
                  flexDirection:
                    index % 2 === 0
                      ? { xs: "column", md: "row" }
                      : { xs: "column-reverse", md: "row-reverse" },
                }}
              >
                <Container
                  maxWidth={false}
                  sx={{
                    paddingY: "1vh",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center", // Center horizontally
                    justifyContent: "center", // Center vertically
                  }}
                >
                  <Card>
                    <CardContent>
                      <Container
                        maxWidth={false}
                        disableGutters
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "flex-start",
                        }}
                      >
                        <Icon
                          sx={{
                            bgcolor: SECONDARY,
                            borderRadius: "50%",
                            height: "2rem",
                            width: "2rem",
                            justifyContent: "center",
                            alignItems: "center",
                            display: "inline-flex",
                            marginRight: "0.5rem",
                          }}
                        >
                          {icon}
                        </Icon>
                        <Typography variant="h5" color={PRIMARY}>
                          {header}
                        </Typography>
                      </Container>
                      <Typography variant="h6" color="text.secondary">
                        {description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Container>
                <Container
                  maxWidth={false}
                  disableGutters
                  sx={{
                    paddingY: "1vh",
                  }}
                >
                  <Container
                    maxWidth={false}
                    disableGutters
                    sx={{
                      backgroundImage: `url(${img})`,
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                      backgroundSize: "contain",
                      height: { xs: "30vh", md: "50vh" },
                    }}
                  />
                </Container>
              </Container>
            ))}
          </Carousel>
        </Container>
      </Container>
    </div>
  );
};

export default Carosel;
