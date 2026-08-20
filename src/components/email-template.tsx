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

type EmailTemplateProps = {
  firstName: string;
};

export const EmailTemplate = ({ firstName }: EmailTemplateProps) => {
  return (
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
              READY TO GET PLUGGED IN?
            </Text>

            <Text
              style={{
                fontSize: "15px",
                marginBottom: "16px",
                lineHeight: "1.6",
              }}
            >
              Hi <strong>{firstName}</strong>,
            </Text>

            <Text
              style={{
                fontSize: "15px",
                marginBottom: "16px",
                lineHeight: "1.6",
              }}
            >
              Thank you for your interest in becoming one of Kaly&apos;s House
              Lucky Guests! We have successfully received your submission. This
              is a highly exclusive opportunity, and we appreciate you taking
              the time to apply. What Happens Next?
            </Text>

            <Section
              style={{ fontSize: "15px", lineHeight: "1.6", color: "#fff" }}
            >
              <p>
                Due to the limited and exclusive nature of this experience, all
                requests are subject to an approval process. Here is what you
                can expect:
              </p>
              <ul style={{ paddingLeft: "20px", marginBottom: "16px" }}>
                <li>
                  1. Review: Your request is now being reviewed by our team.
                </li>
                <li>
                  2. Notification: If approved, we will reach out within 5-7
                  business days.
                </li>
                <li>
                  3. Scheduling: The approval email will include the final
                  confirmed date and 4-hour time slot.
                </li>
              </ul>
            </Section>

            <Text
              style={{
                fontSize: "15px",
                marginBottom: "16px",
                lineHeight: "1.6",
              }}
            >
              Please note: Receiving this confirmation email does{" "}
              <strong>not</strong> guarantee your spot. Attendance is only
              confirmed once you receive a separate approval email from us. We
              are excited about the possibility of hosting you and your group.
              Thank you again for your interest.
            </Text>

            <Text
              style={{ fontSize: "15px", marginTop: "24px", lineHeight: "1.6" }}
            >
              Best regards,
              <br />
              <strong>The Kaly&apos;s House Team</strong>
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
            {/* Desktop layout using Row/Column */}
            <Row
              style={{ display: "none", maxWidth: "600px", margin: "0 auto" }}
            >
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

            {/* Mobile layout (stacked) */}
            <div
              style={{
                display: "block",
                maxWidth: "600px",
                margin: "0 auto",
              }}
            >
              {/* Logo */}
              <div style={{ marginBottom: "24px" }}>
                <Img
                  src="https://res.cloudinary.com/dowv4fs9p/image/upload/v1764676587/kalys-house-logo_h9rwfg.png"
                  width="70"
                  height="50"
                  alt="Kaly's House Logo"
                  style={{ margin: "0 auto", display: "block" }}
                />
              </div>

              {/* Follow Text */}
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

              {/* Social Icons */}
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
};
