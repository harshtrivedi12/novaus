import React from "react";

function TwoBoxWithLinesSkeleton() {
  const styles = {
    container: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: "14rem",
      width: "20rem",
      margin: "20px",
      backgroundColor: "#d1d5db",
      borderRadius: "0.5rem",
      animation: "pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite",
    },
  };
  const baseStyle = {
    borderRadius: "9999px",
    height: "10px",
  };

  const gray200Style = {
    ...baseStyle,
    backgroundColor: "#e5e7eb",
  };

  const gray300Style = {
    ...baseStyle,
    backgroundColor: "#d1d5db",
  };

  const darkGray700Style = {
    ...baseStyle,
    backgroundColor: "#374151",
  };

  const darkGray600Style = {
    ...baseStyle,
    backgroundColor: "#a3a8af",
  };
  const array = [0, 1, 2, 3];
  return (
    <div className="container-fluid">
      <style>
        {`
          .pulse {
            animation: pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite;
          }
          @keyframes pulse {
            0%, 100% {
              opacity: 1;
            }
            50% {
              opacity: 0.5;
            }
          }
        `}
      </style>
      <div
        className="w-100 d-flex align-items-center   justify-content-center "
        style={{ gap: "12px" }}
      >
        <div style={{ width: "40%" }}>
          <div
            className="d-flex justify-content-center "
            style={{ gap: "12px" }}
          >
            <div role="status" style={styles.container}>
              <span style={styles.visuallyHidden}>Loading...</span>
            </div>
          </div>
          {array.map((item, index) => {
            return (
              <div className="w-100 d-flex justify-content-center " key={index}>
                <div
                  role="status"
                  className="d-flex w-100   flex-column m-3  align-items-center gap-2 pulse"
                >
                  <div className="d-flex align-items-center justify-content-center p-2  w-100">
                    <div style={{ ...gray200Style, width: "128px" }}></div>
                    <div
                      style={{
                        ...gray300Style,
                        width: "96px",
                        marginLeft: "8px",
                      }}
                    ></div>
                    <div
                      style={{
                        ...darkGray600Style,
                        flex: 1,
                        marginLeft: "8px",
                      }}
                    ></div>
                  </div>
                  <div className="d-flex  align-items-center justify-content-center p-2  w-100">
                    <div style={{ ...gray200Style, width: "128px" }}></div>
                    <div
                      style={{
                        ...darkGray600Style,
                        flex: 1,
                        marginLeft: "8px",
                      }}
                    ></div>
                    <div
                      style={{
                        ...gray300Style,
                        width: "96px",
                        marginLeft: "8px",
                      }}
                    ></div>
                  </div>
                  <div className="d-flex mt-2 align-items-center justify-content-center p-2  w-100">
                    <div style={{ ...gray200Style, width: "128px" }}></div>
                    <div
                      style={{
                        ...darkGray600Style,
                        flex: 1,
                        marginLeft: "8px",
                      }}
                    ></div>
                    <div
                      style={{
                        ...gray300Style,
                        width: "96px",
                        marginLeft: "8px",
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div style={{ width: "40%" }}>
          <div
            className="d-flex justify-content-center "
            style={{ gap: "12px" }}
          >
            <div role="status" style={styles.container}>
              <span style={styles.visuallyHidden}>Loading...</span>
            </div>
          </div>
          {array.map((item, index) => {
            return (
              <div className="w-100 d-flex justify-content-center " key={index}>
                <div
                  role="status"
                  className="d-flex w-100  flex-column m-3  align-items-center gap-2 pulse"
                >
                  <div className="d-flex align-items-center justify-content-center p-2  w-100">
                    <div style={{ ...gray200Style, width: "128px" }}></div>
                    <div
                      style={{
                        ...gray300Style,
                        width: "96px",
                        marginLeft: "8px",
                      }}
                    ></div>
                    <div
                      style={{
                        ...darkGray600Style,
                        flex: 1,
                        marginLeft: "8px",
                      }}
                    ></div>
                  </div>
                  <div className="d-flex  align-items-center justify-content-center p-2  w-100">
                    <div style={{ ...gray200Style, width: "128px" }}></div>
                    <div
                      style={{
                        ...darkGray600Style,
                        flex: 1,
                        marginLeft: "8px",
                      }}
                    ></div>
                    <div
                      style={{
                        ...gray300Style,
                        width: "96px",
                        marginLeft: "8px",
                      }}
                    ></div>
                  </div>
                  <div className="d-flex mt-2 align-items-center justify-content-center p-2  w-100">
                    <div style={{ ...gray200Style, width: "128px" }}></div>
                    <div
                      style={{
                        ...darkGray600Style,
                        flex: 1,
                        marginLeft: "8px",
                      }}
                    ></div>
                    <div
                      style={{
                        ...gray300Style,
                        width: "96px",
                        marginLeft: "8px",
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default TwoBoxWithLinesSkeleton;
