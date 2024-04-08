// MUI Components
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

interface SectionTemplateProps {
  id: string;
  textColor: string;
  backgroundColor: string;
  description: string;
  img: string;
}

const SectionTemplate = ({
  id,
  textColor,
  backgroundColor,
  description,
  img,
}: SectionTemplateProps) => {
  return (
    <div id={id}>
      <Container
        maxWidth={false}
        disableGutters
        sx={{
          color: textColor,
          display: "flex",
          flexDirection: { md: "row", xs: "column" },
          alignItems: "center",
          justifyContent: "center",
          bgcolor: backgroundColor,
        }}
      >
        <Container
          sx={{
            backgroundImage: `url(${img})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "contain",
            height: { xs: "30vh", md: "50vh" },
          }}
        />
        <Container>
          <Typography color={"inherit"} variant="h6">
            {description}
          </Typography>
        </Container>
      </Container>
    </div>
  );
};

export default SectionTemplate;
