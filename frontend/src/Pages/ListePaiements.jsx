import {
  Card,
  CardContent,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  Chip,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
} from "@mui/material";
import { Search as SearchIcon } from "@mui/icons-material";
import { useEffect, useState } from "react";
import ShowEtudiantPaiementsDetails from "../components/Popus/Details/ShowEtudiantPaimentsDetails";
import DataHandler from "../Data/DataHandler";

const ListePaiements = () => {
  useEffect(() => {
    getAllPaiments();
  }, []);

  const [selectedStudent, setSelectedStudent] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterLevel, setFilterLevel] = useState("all");
  const [filterProgram, setFilterProgram] = useState("all");
  const [allPaiements, setAllPaiements] = useState([]);

  const getAllPaiments = async () => {
    try {
      const response = await DataHandler.getDatas("/");
      setAllPaiements(response.PaiementsEtudiants);
    } catch (error) {
      console.error(error);
    }
  };

  // Filtrer les étudiants
  const filteredStudents = allPaiements.filter((student) => {
    const searchMatch = `${student.firstName} ${student.lastName}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const levelMatch = filterLevel === "all" || student.level === filterLevel;
    const programMatch =
      filterProgram === "all" || student.program === filterProgram;
    return searchMatch && levelMatch && programMatch;
  });

  // Obtenir le statut avec la couleur appropriée
  const getStatusChip = (status) => {
    const color = status === "En règle" ? "success" : "error";
    return <Chip label={status} color={color} size="small" />;
  };
  return (
    <Box sx={{ width: "100%", p: 2 }}>
      <Card>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Gestion des Paiements
          </Typography>

          <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
            <TextField
              size="small"
              placeholder="Rechercher un étudiant..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              slotProps={{
                input: {
                  startAdornment: (
                    <SearchIcon sx={{ color: "action.active", mr: 1 }} />
                  ),
                },
              }}
            />

            <FormControl sx={{ minWidth: 120 }} size="small">
              <InputLabel>Niveau</InputLabel>
              <Select
                value={filterLevel}
                label="Niveau"
                onChange={(e) => setFilterLevel(e.target.value)}
              >
                <MenuItem value="all">Tous</MenuItem>
                <MenuItem value="BT">BT</MenuItem>
                <MenuItem value="BTS">BTS</MenuItem>
                <MenuItem value="Licence">Licence</MenuItem>
              </Select>
            </FormControl>

            <FormControl sx={{ minWidth: 120 }} size="small">
              <InputLabel>Filière</InputLabel>
              <Select
                value={filterProgram}
                label="Filière"
                onChange={(e) => setFilterProgram(e.target.value)}
              >
                <MenuItem value="all">Toutes</MenuItem>
                <MenuItem value="Informatique">Informatique</MenuItem>
                <MenuItem value="Gestion">Gestion</MenuItem>
              </Select>
            </FormControl>
          </Box>

          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Étudiant</TableCell>
                  <TableCell>Filière/Niveau</TableCell>
                  <TableCell>Dernier paiement</TableCell>
                  <TableCell align="right">Total versé</TableCell>
                  <TableCell align="right">Restant</TableCell>
                  <TableCell>Statut</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredStudents.map((student) => (
                  <TableRow
                    key={student.id}
                    onClick={() => setSelectedStudent(student)}
                    sx={{
                      cursor: "pointer",
                      "&:hover": { backgroundColor: "action.hover" },
                    }}
                  >
                    <TableCell>
                      {student.firstName} {student.lastName}
                    </TableCell>
                    <TableCell>
                      {student.program} - {student.level}
                    </TableCell>
                    <TableCell>{student.lastPaymentDate}</TableCell>
                    <TableCell align="right">
                      {student.totalPaid.toLocaleString()} FCFA
                    </TableCell>
                    <TableCell align="right">
                      {(student.totalFees - student.totalPaid).toLocaleString()}{" "}
                      FCFA
                    </TableCell>
                    <TableCell>{getStatusChip(student.status)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>
      {selectedStudent && (
        <ShowEtudiantPaiementsDetails
          selected
          student={selectedStudent}
          onClose={() => setSelectedStudent(null)}
        />
      )}
    </Box>
  );
};

export default ListePaiements;
