import { colors, globalStyles } from "@/styles/globalStyles";
import { ViewStyle } from "react-native";
import { Button } from "react-native-paper";

type Props = {
  children: React.ReactNode;
  onPress: () => void;
  buttonStyles?: ViewStyle;
};

export default function PrimaryButton({ children, onPress, buttonStyles }: Props) {
  return (
    <Button textColor={colors.primaryBtnText} style={[globalStyles.primaryButton, buttonStyles]} onPress={onPress}>
      {children}
    </Button>
  );
}
