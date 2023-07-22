const PasswordStrengthIndicator = ({ strength }) => {
  const getPasswordStrengthColor = () => {
    return "gray";
  };

  return (
    <div style={{ marginTop: "10px" }}>
      <div
        style={{
          width: "100%",
          height: "20px",
          backgroundColor: getPasswordStrengthColor(),
        }}
      />
    </div>
  );
};

export default PasswordStrengthIndicator;
