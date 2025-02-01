import {
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
  Chip,
} from "@mui/material";
import {
  Close as CloseIcon,
} from "@mui/icons-material";
import PropTypes from "prop-types";

const PresencesListe = ({ session, onClose }) => {
  return (
    <Dialog 
    open={true} 
    onClose={onClose}
    maxWidth="md"
    fullWidth
  >
    <DialogTitle>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="h6">
          Liste des présences - {session.program} {session.level}
        </Typography>
        <Typography variant="subtitle1">
          {session.date} à {session.time}
        </Typography>
        <IconButton onClick={onClose} size="small">
          <CloseIcon />
        </IconButton>
      </Box>
    </DialogTitle>
    <DialogContent>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Étudiant</TableCell>
              <TableCell align="center">Statut</TableCell>
              <TableCell align="center">Justifié</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {session.students.map((student) => (
              <TableRow key={student.id}>
                <TableCell>{student.name}</TableCell>
                <TableCell align="center">
                  <Typography
                    color={student.present ? 'success.main' : 'error.main'}
                    fontWeight="medium"
                  >
                    {student.present ? 'Présent' : 'Absent'}
                  </Typography>
                </TableCell>
                <TableCell align="center">
                  {!student.present && (
                    <Chip
                      label={student.justified ? 'OUI' : 'NON'}
                      color={student.justified ? 'success' : 'error'}
                      size="small"
                    />
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </DialogContent>
  </Dialog>
    // <Dialog open={true} onClose={onClose} maxWidth="md" fullWidth>
    //   <DialogTitle>
    //     <Box
    //       sx={{
    //         display: "flex",
    //         justifyContent: "space-between",
    //         alignItems: "center",
    //       }}
    //     >
    //       <Typography variant="h6">
    //         Liste des présences - {session.program} {session.level}
    //       </Typography>
    //       <Typography variant="subtitle1">
    //         {session.date} à {session.time}
    //       </Typography>
    //       <IconButton onClick={onClose} size="small">
    //         <CloseIcon />
    //       </IconButton>
    //     </Box>
    //   </DialogTitle>
    //   <DialogContent>
    //     <TableContainer>
    //       <Table>
    //         <TableHead>
    //           <TableRow>
    //             <TableCell>Étudiant</TableCell>
    //             <TableCell align="center">Statut</TableCell>
    //           </TableRow>
    //         </TableHead>
    //         <TableBody>
    //           {session.students.map((student) => (
    //             <TableRow key={student.id}>
    //               <TableCell>{student.name}</TableCell>
    //               <TableCell align="center">
    //                 <Typography
    //                   color={student.present ? "success.main" : "error.main"}
    //                   fontWeight="medium"
    //                 >
    //                   {student.present ? "Présent" : "Absent"}
    //                 </Typography>
    //               </TableCell>
    //             </TableRow>
    //           ))}
    //         </TableBody>
    //       </Table>
    //     </TableContainer>
    //   </DialogContent>
    // </Dialog>
  );
};
PresencesListe.propTypes = {
  session: PropTypes.shape({
    program: PropTypes.string.isRequired,
    level: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    students: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        present: PropTypes.bool.isRequired,
      })
    ).isRequired,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
};

export default PresencesListe;
