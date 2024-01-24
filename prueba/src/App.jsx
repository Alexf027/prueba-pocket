import { useState } from "react";
import pocket from "./images/c-pocket.png";
import {
  Box,
  Input,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  IconButton,
  Select,
  Flex,
  Icon,
  HStack,
  Image,
} from "@chakra-ui/react";
import { AddIcon, DeleteIcon } from "@chakra-ui/icons";
import { DarkMode } from "./darkMode";

function App() {
  const [apps, setApps] = useState([
    { nombre: "Whatsapp", categoria: "Mensajería" },
    { nombre: "Facebook", categoria: "Redes sociales" },
    { nombre: "Instagram", categoria: "Redes sociales" },
    { nombre: "Nextflix", categoria: "Entretenimiento" },
    { nombre: "HBoMax", categoria: "Entretenimiento" },
  ]);

  const [newApp, setNewApp] = useState("");
  const [newCategory, setNewCategory] = useState("");

  const addApp = () => {
    if (newApp && newCategory) {
      setApps([...apps, { nombre: newApp, categoria: newCategory }]);
      setNewApp("");
      setNewCategory("");
    }
  };

  const removeApp = (index) => {
    setApps(apps.filter((_, i) => i !== index));
  };

  return (
    <Box p={4} bg="#ffffff" h="100vh">
      <Flex mb={4} alignItems="center" padding={6}>
        <Input
          size="lg"
          width="45%"
          placeholder="Escribe el nombre de la app"
          value={newApp}
          onChange={(e) => setNewApp(e.target.value)}
          focusBorderColor="#3d7f00"
          color="#3d7f00"
        />
        <Select
          bg="#dcf7c3"
          size="lg"
          width="30%"
          color="gray.500"
          placeholder="Selecciona una categoría"
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
          ml={2}
        >
          <option value="Entretenimiento">Entretenimiento</option>
          <option value="Mensajería">Mensajería</option>
          <option value="Redes sociales">Redes sociales</option>
        </Select>
        <HStack spacing={4} ml={8}>
          <IconButton
            fontSize="22px"
            onClick={addApp}
            ml={2}
            bg="#dcf7c3"
            _hover={{ fontSize: "26px" }}
          >
            <Icon color="#62a524" as={AddIcon} />
          </IconButton>
          <IconButton
            color="#62a524"
            _hover={{ fontSize: "26px" }}
            bg="#dcf7c3"
            ml={2}
          >
            <DarkMode />
          </IconButton>
        </HStack>
        <Image src={pocket} h={12} ml={8} />
      </Flex>
      <Table>
        <Thead bg="#7ebe43" p={4}>
          <Tr>
            <Th fontSize="large" color="white">
              #
            </Th>
            <Th fontSize="large" color="white">
              Objeto
            </Th>
            <Th fontSize="large" color="white">
              Categoría
            </Th>
            <Th fontSize="large" color="white">
              Acciones
            </Th>
          </Tr>
        </Thead>
        <Tbody bg="#b1d68f">
          {apps.map((app, index) => (
            <Tr key={index}>
              <Td color="#3d7f00">{index + 1}</Td>
              <Td color="#3d7f00">{app.nombre}</Td>
              <Td color="#3d7f00">{app.categoria}</Td>
              <Td>
                <IconButton
                  fontSize="20px"
                  bg="#b1d68f"
                  color="#3d7f00"
                  aria-label="Eliminar app"
                  icon={<DeleteIcon />}
                  onClick={() => removeApp(index)}
                  _hover={{ fontSize: "26px" }}
                />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
}

export default App;