"use client";

import GoogleAuthButton from "@/components/GoogleAuthButton/GoogleAuthButton";
import { Alert, Anchor, Button, Center, Checkbox, Divider, Group, Paper, PasswordInput, Stack, Text, TextInput, Tooltip } from "@mantine/core";
import { useForm } from "@mantine/form";
import { IconAlertOctagon, IconLock, IconLogin2, IconUserPentagon } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

function LoginForm() {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      username: "",
      password: "",
      remember: false
    },
    validate: {
      username: value => {
        if (!value) return "Username is required.";
        return null;
      },
      password: value => {
        if (!value) return "Password is required.";
        return null;
      }
    }
  });

  const onSubmit = form.onSubmit((values) => {
    setSubmitting(true);

    // Simulate the login
    setTimeout(() => {
      if (values.username === "admin" && values.password === "admin") {
        console.log(values);
        form.setFieldValue("password", "");
        router.push("/charts");
      } else {
        setAlertMessage("Invalid credentials");
      }
      setSubmitting(false);
    }, 3500);
  })

  return (
    <form onSubmit={onSubmit}>
      <Stack>
        <Text
          fw={800}
          ta="center"
          size="xl"
        >Login</Text>
        <Text
          fw={400}
          ta="center"
          size="sm"
        >PrensUI Mantine</Text>

        {alertMessage && !submitting && <Alert
          withCloseButton
          variant="light"
          color="red"
          closeButtonLabel="Close"
          icon={<IconAlertOctagon />}
          onClose={() => { setAlertMessage("") }}
        >{alertMessage}</Alert>}

        <TextInput
          data-autofocus
          placeholder="Username"
          leftSection={<IconUserPentagon size={16} />}
          disabled={submitting}
          {...form.getInputProps("username")}
        />

        <PasswordInput
          placeholder="Password"
          leftSection={
            <Tooltip label="Show/hide password">
              <IconLock size={16} />
            </Tooltip>
          }
          disabled={submitting}
          {...form.getInputProps("password")}
        />

        <Group justify="space-between">
          <Checkbox
            label="Remember me"
            disabled={submitting}
            {...form.getInputProps("remember")}
          />
          <Anchor href="#" style={{ fontSize: 14 }}>Forgot Password?</Anchor>
        </Group>

        <Button
          type="submit"
          rightSection={<IconLogin2 size={16} />}
          loading={submitting}
        >Login</Button>

        <Divider label="Or sign in with" />

        <GoogleAuthButton disabled={submitting} />
      </Stack>
    </form>
  )
}

export default function LoginPage() {
  return (
    <Center w="100dvw" h="100dvh" style={{ background: "#f1f3f5" }}>
      <Paper
        withBorder
        w={400}
        p="md"
      >
        <LoginForm />
      </Paper>
    </Center >
  )
}