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
  Chip,
} from "@mui/material";

import { useEffect, useState } from "react";
import CoursListe from "../components/Listing/CoursListe";
import DataHandler from "../Data/DataHandler";

const ListeCours = () => {

  useEffect(() => {
    getCourses();
  }, []); 

  const getCourses = async () => {
    try {
      const responses = await DataHandler.getDatas("/");
      setAllCourses(responses.Cours)
    } catch (error) {
      console.error("Erreur lors de la récupération des cours : ", error);
    }
  };

  const [allCourses, setAllCourses] = useState([]);
  const [selectedLevel, setSelectedLevel] = useState("all");
  const [selectedProgram, setSelectedProgram] = useState("all");
  const [selectedCourse, setSelectedCourse] = useState(null);

  // Horaires de cours
  const timeSlots = [
    "08:00-10:00",
    "10:00-12:00",
    "14:00-16:00",
    "16:00-18:00",
  ];

  // Jours de la semaine
  const weekDays = [
    "Lundi",
    "Mardi",
    "Mercredi",
    "Jeudi",
    "Vendredi",
    "Samedi",
  ];


  // Trouver le cours pour un créneau donné
  const getCourseForSlot = (day, timeSlot) => {
    const [start] = timeSlot.split("-");
    // return courses.find(
      return allCourses.find(
      (course) =>
        course.day === day &&
        course.startTime === start &&
        (selectedLevel === "all" || course.level === selectedLevel) &&
        (selectedProgram === "all" || course.program === selectedProgram)
    );
  };

  return (
    <Box sx={{ width: "100%", p: 2 }}>
      <Card>
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Emploi du temps
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
                  <TableCell>Horaire</TableCell>
                  {weekDays.map((day) => (
                    <TableCell key={day} align="center">
                      {day}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {timeSlots.map((timeSlot) => (
                  <TableRow key={timeSlot}>
                    <TableCell>{timeSlot}</TableCell>
                    {weekDays.map((day) => {
                      const course = getCourseForSlot(day, timeSlot);
                      return (
                        <TableCell
                          key={day}
                          align="center"
                          sx={{ minWidth: 200 }}
                        >
                          {course && (
                            <Box
                              sx={{
                                p: 1,
                                bgcolor: "primary.light",
                                borderRadius: 1,
                                cursor: "pointer",
                                "&:hover": { bgcolor: "primary.main" },
                              }}
                              onClick={() => setSelectedCourse(course)}
                            >
                              <Typography
                                variant="body2"
                                sx={{ color: "white", fontWeight: "medium" }}
                              >
                                {course.subject}
                              </Typography>
                              <Typography
                                variant="caption"
                                sx={{ color: "white" }}
                              >
                                {course.room}
                              </Typography>
                              <Box sx={{ mt: 1 }}>
                                <Chip
                                  label={course.type}
                                  size="small"
                                  sx={{
                                    bgcolor: "white",
                                    fontSize: "0.7rem",
                                  }}
                                />
                              </Box>
                            </Box>
                          )}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>

      {selectedCourse && (
        <CoursListe
          course={selectedCourse}
          onClose={() => setSelectedCourse(null)}
        />
      )}
    </Box>
  );
};

export default ListeCours;
