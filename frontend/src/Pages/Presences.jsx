import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  Button,
} from "@mui/material";
import { Visibility as VisibilityIcon } from "@mui/icons-material";
import PresencesListe from "../components/Listing/PresencesListe";
import DataHandler from "../Data/DataHandler";

const ListePresences = () => {
  useEffect(() => {
    getAllSessions();
  }, []);

  const getAllSessions = async () => {
    try {
      const response = await DataHandler.getDatas("");
      setAllSessions(response.PresencesAbsences);
    } catch (error) {
      console.error(error);
    }
  };
  const [allSessions, setAllSessions] = useState([]);
  const [selectedLevel, setSelectedLevel] = useState("all");
  const [selectedProgram, setSelectedProgram] = useState("all");
  const [selectedSession, setSelectedSession] = useState(null);

  // Filtrer les sessions
  // const filteredSessions = sessions.filter((session) => {
  const filteredSessions = allSessions.filter((session) => {
    if (selectedLevel !== "all" && session.level !== selectedLevel)
      return false;
    return !(selectedProgram !== "all" && session.program !== selectedProgram);
  });

  // Calculer les statistiques
  const getSessionStats = (session) => {
    const total = session.students.length;
    const present = session.students.filter((s) => s.present).length;
    const percentagePresent = ((present / total) * 100).toFixed(1);
    return { total, present, percentagePresent };
  };

  return (
    <Box sx={{ width: "100%", p: 2 }}>
      <Card>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Suivi des Présences
          </Typography>

          <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
            <FormControl sx={{ minWidth: 120 }}>
              <InputLabel>Niveau</InputLabel>
              <Select
                value={selectedLevel}
                label="Niveau"
                onChange={(e) => setSelectedLevel(e.target.value)}
              >
                <MenuItem value="all">Tous</MenuItem>
                <MenuItem value="BT">BT</MenuItem>
                <MenuItem value="BTS">BTS</MenuItem>
                <MenuItem value="Licence">Licence</MenuItem>
              </Select>
            </FormControl>

            <FormControl sx={{ minWidth: 120 }}>
              <InputLabel>Filière</InputLabel>
              <Select
                value={selectedProgram}
                label="Filière"
                onChange={(e) => setSelectedProgram(e.target.value)}
              >
                <MenuItem value="all">Toutes</MenuItem>
                <MenuItem value="Informatique">Informatique</MenuItem>
                <MenuItem value="Gestion">Gestion</MenuItem>
              </Select>
            </FormControl>
          </Box>

          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }}>
              <TableHead>
                <TableRow>
                  <TableCell>Date</TableCell>
                  <TableCell>Heure</TableCell>
                  <TableCell>Filière</TableCell>
                  <TableCell>Niveau</TableCell>
                  <TableCell>Présents</TableCell>
                  <TableCell>Taux</TableCell>
                  <TableCell align="center">Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredSessions.map((session) => {
                  const stats = getSessionStats(session);
                  return (
                    <TableRow
                      key={session.id}
                      sx={{
                        "&:hover": { backgroundColor: "rgba(0, 0, 0, 0.04)" },
                      }}
                    >
                      <TableCell>{session.date}</TableCell>
                      <TableCell>{session.time}</TableCell>
                      <TableCell>{session.program}</TableCell>
                      <TableCell>{session.level}</TableCell>
                      <TableCell>
                        {stats.present}/{stats.total}
                      </TableCell>
                      <TableCell>{stats.percentagePresent}%</TableCell>
                      <TableCell align="center">
                        <Button
                          startIcon={<VisibilityIcon />}
                          onClick={() => setSelectedSession(session)}
                          size="small"
                        >
                          Voir liste
                        </Button>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>

      {selectedSession && (
        <PresencesListe
          session={selectedSession}
          onClose={() => setSelectedSession(null)}
        />
      )}
    </Box>
  );
};

export default ListePresences;
