import {
  Html,
  Body,
  Container,
  Section,
  Img,
  Text,
  Link,
  Row,
  Column,
} from "@react-email/components";

type BulkEmailTemplateProps = {
  guestName: string;
  phone: string;
  date: string;
  time: string;
};

export const BulkEmailTemplate = ({
  guestName,
  phone,
  date,
  time,
}: BulkEmailTemplateProps) => (
  <Html>
    <Body style={{ margin: 0, padding: 0, backgroundColor: "#f8f9fa" }}>
      <Container
        style={{
          maxWidth: "650px",
          margin: "0 auto",
          borderRadius: "12px",
          overflow: "hidden",
          fontFamily: "Arial, Helvetica, sans-serif",
          border: "1px solid #FFFFFF",
        }}
      >
        {/* Banner */}
        <Section>
          <Img
            src="https://res.cloudinary.com/dowv4fs9p/image/upload/v1764605446/email-template-banner_ljgd1a.webp"
            width="650"
            alt="Kaly's House Banner"
            style={{
              display: "block",
              width: "100%",
              height: "auto",
              borderRadius: "12px 12px 0 0",
            }}
          />
        </Section>

        {/* Content */}
        <Section
          style={{ backgroundColor: "#000", padding: "40px", color: "#fff" }}
        >
          <Text
            style={{
              fontFamily: "'Bebas Neue', Arial, sans-serif",
              fontSize: "32px",
              color: "#EF5134",
              textAlign: "center",
              margin: "28px 0",
            }}
          >
            YOU'RE PLUGGED IN!
          </Text>

          <Text
            style={{
              fontSize: "15px",
              marginBottom: "16px",
              lineHeight: "1.6",
            }}
          >
            Hi <strong>{guestName}</strong>,
          </Text>

          <Text
            style={{
              fontSize: "15px",
              marginBottom: "16px",
              lineHeight: "1.6",
            }}
          >
            We are delighted to inform you that you have been selected as a
            Lucky Guest at Kaly’s House.
          </Text>

          <Text
            style={{
              fontSize: "15px",
              marginBottom: "16px",
              lineHeight: "1.6",
            }}
          >
            <strong>Your Confirmed Visit Details:</strong>
            <br />
            Name: {guestName}
            <br />
            Phone: {phone}
            <br />
            Date: {date}
            <br />
            Time Slot: {time}
          </Text>

          <Text
            style={{
              fontSize: "15px",
              marginBottom: "16px",
              lineHeight: "1.6",
            }}
          >
            <strong>Important Information:</strong>
            <br />
            - Please arrive on time, as late arrivals may result in a shortened
            experience.
            <br />
            - This invitation is non-transferable.
            <br />- Our team may contact you via the phone number provided if
            needed prior to your visit.
          </Text>

          <Text
            style={{ fontSize: "15px", marginTop: "24px", lineHeight: "1.6" }}
          >
            We look forward to welcoming you to Kaly’s House.
            <br />
            Best regards,
            <br />
            <strong>The Kaly’s House Team</strong>
          </Text>
        </Section>

        {/* Footer */}
        <Section
          style={{
            backgroundColor: "#000",
            padding: "24px",
            borderRadius: "0 0 12px 12px",
            backgroundImage:
              "url('https://res.cloudinary.com/dowv4fs9p/image/upload/v1764671735/background-image_xqstwi.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            textAlign: "center",
          }}
        >
          <Row style={{ display: "none", maxWidth: "600px", margin: "0 auto" }}>
            <Column style={{ width: "33%", verticalAlign: "middle" }}>
              <Img
                src="https://res.cloudinary.com/dowv4fs9p/image/upload/v1764676587/kalys-house-logo_h9rwfg.png"
                width="70"
                height="50"
                alt="Kaly's House Logo"
                style={{ margin: "0 auto", display: "block" }}
              />
            </Column>
            <Column style={{ width: "34%", verticalAlign: "middle" }}>
              <Text
                style={{
                  fontSize: "18px",
                  color: "#fff",
                  margin: "0",
                  fontWeight: "bold",
                  lineHeight: "1.4",
                }}
              >
                FOLLOW US ON SOCIALS
              </Text>
            </Column>
            <Column style={{ width: "33%", verticalAlign: "middle" }}>
              <Row style={{ textAlign: "center", justifyContent: "center" }}>
                <Column style={{ width: "40px", padding: "0 5px" }}>
                  <Link
                    href="https://www.instagram.com/kalyshouse"
                    target="_blank"
                    style={{
                      display: "block",
                      width: "40px",
                      height: "40px",
                      backgroundColor: "#000",
                      border: "1px solid #3B3C43",
                      borderRadius: "12px",
                      textDecoration: "none",
                    }}
                  >
                    <Img
                      src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/instagram.svg"
                      width="20"
                      height="20"
                      alt="Instagram"
                      style={{
                        display: "block",
                        margin: "10px auto",
                        filter: "invert(1)",
                      }}
                    />
                  </Link>
                </Column>
                <Column style={{ width: "40px", padding: "0 5px" }}>
                  <Link
                    href="https://x.com/kalyshouse"
                    target="_blank"
                    style={{
                      display: "block",
                      width: "40px",
                      height: "40px",
                      backgroundColor: "#000",
                      border: "1px solid #3B3C43",
                      borderRadius: "12px",
                      textDecoration: "none",
                    }}
                  >
                    <Img
                      src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/x.svg"
                      width="20"
                      height="20"
                      alt="X"
                      style={{
                        display: "block",
                        margin: "10px auto",
                        filter: "invert(1)",
                      }}
                    />
                  </Link>
                </Column>
                <Column style={{ width: "40px", padding: "0 5px" }}>
                  <Link
                    href="https://youtube.com/@kalyshouse"
                    target="_blank"
                    style={{
                      display: "block",
                      width: "40px",
                      height: "40px",
                      backgroundColor: "#000",
                      border: "1px solid #3B3C43",
                      borderRadius: "12px",
                      textDecoration: "none",
                    }}
                  >
                    <Img
                      src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/youtube.svg"
                      width="20"
                      height="20"
                      alt="YouTube"
                      style={{
                        display: "block",
                        margin: "10px auto",
                        filter: "invert(1)",
                      }}
                    />
                  </Link>
                </Column>
              </Row>
            </Column>
          </Row>

          {/* Mobile layout */}
          <div
            style={{ display: "block", maxWidth: "600px", margin: "0 auto" }}
          >
            <div style={{ marginBottom: "24px" }}>
              <Img
                src="https://res.cloudinary.com/dowv4fs9p/image/upload/v1764676587/kalys-house-logo_h9rwfg.png"
                width="70"
                height="50"
                alt="Kaly's House Logo"
                style={{ margin: "0 auto", display: "block" }}
              />
            </div>

            <div style={{ marginBottom: "24px" }}>
              <Text
                style={{
                  fontSize: "18px",
                  color: "#fff",
                  margin: "0",
                  fontWeight: "bold",
                  lineHeight: "1.4",
                }}
              >
                FOLLOW US ON SOCIALS
              </Text>
            </div>

            <div style={{ textAlign: "center" }}>
              <Link
                href="https://www.instagram.com/kalyshouse"
                target="_blank"
                style={{
                  display: "inline-block",
                  width: "40px",
                  height: "40px",
                  backgroundColor: "#000",
                  border: "1px solid #3B3C43",
                  borderRadius: "12px",
                  textDecoration: "none",
                  margin: "0 5px",
                }}
              >
                <Img
                  src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/instagram.svg"
                  width="20"
                  height="20"
                  alt="Instagram"
                  style={{
                    display: "block",
                    margin: "10px auto",
                    filter: "invert(1)",
                  }}
                />
              </Link>
              <Link
                href="https://x.com/kalyshouse"
                target="_blank"
                style={{
                  display: "inline-block",
                  width: "40px",
                  height: "40px",
                  backgroundColor: "#000",
                  border: "1px solid #3B3C43",
                  borderRadius: "12px",
                  textDecoration: "none",
                  margin: "0 5px",
                }}
              >
                <Img
                  src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/x.svg"
                  width="20"
                  height="20"
                  alt="X"
                  style={{
                    display: "block",
                    margin: "10px auto",
                    filter: "invert(1)",
                  }}
                />
              </Link>
              <Link
                href="https://youtube.com/@kalyshouse"
                target="_blank"
                style={{
                  display: "inline-block",
                  width: "40px",
                  height: "40px",
                  backgroundColor: "#000",
                  border: "1px solid #3B3C43",
                  borderRadius: "12px",
                  textDecoration: "none",
                  margin: "0 5px",
                }}
              >
                <Img
                  src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/youtube.svg"
                  width="20"
                  height="20"
                  alt="YouTube"
                  style={{
                    display: "block",
                    margin: "10px auto",
                    filter: "invert(1)",
                  }}
                />
              </Link>
            </div>
          </div>
        </Section>
      </Container>
    </Body>
  </Html>
);
