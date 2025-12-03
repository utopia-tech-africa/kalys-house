import {
  Html,
  Body,
  Container,
  Section,
  Img,
  Text,
  Link,
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
            maxWidth: "700px",
            borderRadius: "12px",
            overflow: "hidden",
            fontFamily: "Arial, sans-serif",
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
            style={{
              backgroundColor: "#000",
              padding: "40px",
              color: "#FFFFFF",
            }}
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
              style={{ fontSize: "15px", lineHeight: "1.6", color: "#FFF" }}
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

            {/* Footer */}
            <div
              style={{
                backgroundColor: "#000",
                padding: "24px",
                borderRadius: "0 0 12px 12px",
                backgroundImage:
                  "url('https://res.cloudinary.com/dowv4fs9p/image/upload/v1764671735/background-image_xqstwi.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "100%",
                boxSizing: "border-box",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "24px",
                  textAlign: "center",
                }}
                className="footer-content"
              >
                {/* Logo */}
                <div className="footer-logo">
                  <Img
                    src="https://res.cloudinary.com/dowv4fs9p/image/upload/v1764676587/kalys-house-logo_h9rwfg.png"
                    width="70"
                    height="50"
                    alt="Kaly's House Logo"
                    style={{ display: "block" }}
                  />
                </div>

                {/* Follow Text */}
                <div className="footer-text">
                  <Text
                    style={{
                      fontSize: "18px",
                      color: "#FFFFFF",
                      margin: 0,
                      fontWeight: "bold",
                      lineHeight: "1.4",
                    }}
                  >
                    FOLLOW US ON SOCIALS
                  </Text>
                </div>

                {/* Social Icons */}
                <div className="footer-social">
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      gap: "16px",
                      flexWrap: "wrap",
                    }}
                  >
                    {/* Instagram */}
                    <Link
                      href="https://www.instagram.com/kalyshouse"
                      target="_blank"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "40px",
                        height: "40px",
                        backgroundColor: "#000",
                        border: "1px solid #3B3C43",
                        borderRadius: "12px",
                        textDecoration: "none",
                        transition: "all 0.3s ease",
                      }}
                      className="social-link"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                        style={{
                          width: "20px",
                          height: "20px",
                          fill: "#FFFFFF",
                        }}
                      >
                        <path d="M224.3 141a115 115 0 1 0 -.6 230 115 115 0 1 0 .6-230zm-.6 40.4a74.6 74.6 0 1 1 .6 149.2 74.6 74.6 0 1 1 -.6-149.2zm93.4-45.1a26.8 26.8 0 1 1 53.6 0 26.8 26.8 0 1 1 -53.6 0zm129.7 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM399 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                      </svg>
                    </Link>

                    {/* X / Twitter */}
                    <Link
                      href="https://x.com/kalyshouse"
                      target="_blank"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "40px",
                        height: "40px",
                        backgroundColor: "#000",
                        border: "1px solid #3B3C43",
                        borderRadius: "12px",
                        textDecoration: "none",
                        transition: "all 0.3s ease",
                      }}
                      className="social-link"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                        style={{
                          width: "20px",
                          height: "20px",
                          fill: "#FFFFFF",
                        }}
                      >
                        <path d="M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zm297.1 84l-103.8 118.6 122.1 161.4-95.6 0-74.8-97.9-85.7 97.9-47.5 0 111-126.9-117.1-153.1 98 0 67.7 89.5 78.2-89.5 47.5 0zM323.3 367.6l-169.9-224.7-28.3 0 171.8 224.7 26.4 0z" />
                      </svg>
                    </Link>

                    {/* YouTube */}
                    <Link
                      href="https://youtube.com/@kalyshouse"
                      target="_blank"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "40px",
                        height: "40px",
                        backgroundColor: "#000",
                        border: "1px solid #3B3C43",
                        borderRadius: "12px",
                        textDecoration: "none",
                        transition: "all 0.3s ease",
                      }}
                      className="social-link"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                        style={{
                          width: "20px",
                          height: "20px",
                          fill: "#FFFFFF",
                        }}
                      >
                        <path d="M282 256.2l-95.2-54.1 0 108.2 95.2-54.1zM384 32L64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64zm14.4 136.1c7.6 28.6 7.6 88.2 7.6 88.2s0 59.6-7.6 88.1c-4.2 15.8-16.5 27.7-32.2 31.9-28.3 7.7-142.2 7.7-142.2 7.7s-113.9 0-142.2-7.6c-15.7-4.2-28-16.1-32.2-31.9-7.6-28.6-7.6-88.2-7.6-88.2s0-59.7 7.6-88.2c4.2-15.8 16.5-28.2 32.2-32.4 28.3-7.7 142.2-7.7 142.2-7.7s113.9 0 142.2 7.7c15.7 4.2 28 16.6 32.2 32.4z" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Responsive CSS */}
              <style>
                {`
                  /* Base mobile styles (stacked) */
                  .footer-content {
                    flex-direction: column;
                    align-items: center;
                    text-align: center;
                    gap: 24px;
                  }

                  .footer-logo,
                  .footer-text,
                  .footer-social {
                    width: 100%;
                  }

                  /* Medium & large screens: row layout */
                  @media (min-width: 600px) {
                    .footer-content {
                      flex-direction: row;
                      justify-content: space-between;
                      align-items: center;
                      text-align: left;
                      gap: 16px;
                    }

                    .footer-logo,
                    .footer-text,
                    .footer-social {
                      width: auto;
                    }

                    .footer-text {
                      text-align: center;
                      padding: 0 16px;
                    }

                    .footer-social > div {
                      justify-content: flex-end;
                    }
                  }

                  /* Medium devices spacing */
                  @media (min-width: 768px) {
                    .footer-content {
                      gap: 24px;
                    }
                    .footer-text {
                      padding: 0 24px;
                    }
                    .footer-social > div {
                      gap: 20px;
                    }
                  }

                  /* Large devices adjustments */
                  @media (min-width: 1024px) {
                    .footer-content {
                      max-width: 1200px;
                      margin: 0 auto;
                    }
                    .footer-text {
                      font-size: 20px;
                    }
                    .social-link:hover {
                      background-color: #333;
                      transform: translateY(-2px);
                    }
                  }

                  /* Mobile tweaks */
                  @media (max-width: 599px) {
                    .footer-content {
                      gap: 20px;
                    }
                    .social-link {
                      width: 36px;
                      height: 36px;
                    }
                    .social-link svg {
                      width: 18px;
                      height: 18px;
                    }
                  }

                  @media (max-width: 400px) {
                    .footer-content {
                      gap: 16px;
                    }
                    .footer-social > div {
                      gap: 12px;
                    }
                    .social-link {
                      width: 32px;
                      height: 32px;
                    }
                    .social-link svg {
                      width: 16px;
                      height: 16px;
                    }
                    .footer-logo Img {
                      width: 60px;
                      height: 43px;
                    }
                  }

                  @media (min-width: 1024px) {
                    .footer-logo Img {
                      width: 80px;
                      height: 57px;
                    }
                  }
                `}
              </style>
            </div>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};
