import * as React from "react";
import { View } from "react-native";
import { Button, Dialog, Portal, Text } from "react-native-paper";

type Props = {
  title?: string;
  text?: string;
  proceedBtnText?: string;
  cancelBtnText?: string;
  hideDialog: () => void;
  proceedActionFunc: () => void;
};

export default function ConfirmActionDialog({
  hideDialog,
  proceedActionFunc,
  cancelBtnText = "Cancel",
  proceedBtnText = "Proceed",
  text = "This is a simple dialog!",
  title = "Alert",
}: Props) {
  const [visible, setVisible] = React.useState(true);

  const handleProceedFunc = () => {
    proceedActionFunc();
    hideDialog();
  };

  return (
    <View>
      <Portal>
        <Dialog visible={visible} onDismiss={hideDialog}>
          <Dialog.Title>{title}</Dialog.Title>
          <Dialog.Content>
            <Text variant="bodyMedium">{text}</Text>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={hideDialog}>{cancelBtnText}</Button>
            <Button onPress={handleProceedFunc}>{proceedBtnText}</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </View>
  );
}
