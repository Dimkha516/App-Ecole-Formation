import {
  Typography,
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
} from "@mui/material";
import {
  Close as CloseIcon,
  Room as RoomIcon,
  Person as PersonIcon,
} from "@mui/icons-material";
import PropTypes from 'prop-types';

const CoursListe = ({ course, onClose }) => {
  if (!course) return null;

  return (
    <Dialog open={true} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="h6">
            Détails du cours - {course.subject}
          </Typography>
          <IconButton onClick={onClose} size="small">
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2, py: 2 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <PersonIcon />
            <Typography variant="body1">
              <strong>Enseignant:</strong> {course.teacher}
            </Typography>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <RoomIcon />
            <Typography variant="body1">
              <strong>Salle:</strong> {course.room}
            </Typography>
          </Box>

          <Box>
            <Typography variant="body1" gutterBottom>
              <strong>Classe:</strong> {course.level} - {course.program}
            </Typography>
            <Typography variant="body1" gutterBottom>
              <strong>Horaire:</strong> {course.startTime} - {course.endTime}
            </Typography>
            <Typography variant="body1">
              <strong>Type:</strong> {course.type}
            </Typography>
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
};
CoursListe.propTypes = {
  course: PropTypes.shape({
    subject: PropTypes.string.isRequired,
    teacher: PropTypes.string.isRequired,
    room: PropTypes.string.isRequired,
    level: PropTypes.string.isRequired,
    program: PropTypes.string.isRequired,
    startTime: PropTypes.string.isRequired,
    endTime: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
};

export default CoursListe;