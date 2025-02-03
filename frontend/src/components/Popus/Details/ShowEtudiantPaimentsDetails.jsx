import {
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  Dialog,
  DialogTitle,
  IconButton,
  DialogContent,
} from "@mui/material";
import { Close as CloseIcon } from "@mui/icons-material";
import PropTypes from "prop-types";

const ShowEtudiantPaiementsDetails = ({ student, onClose }) => {
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
            Historique des paiements - {student.firstName} {student.lastName}
          </Typography>
          <IconButton onClick={onClose} size="small">
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent>
        <Box sx={{ mb: 3 }}>
          <Typography variant="body1" gutterBottom>
            <strong>Filière:</strong> {student.program}
          </Typography>
          <Typography variant="body1" gutterBottom>
            <strong>Niveau:</strong> {student.level}
          </Typography>
          <Typography variant="body1" gutterBottom>
            <strong>Frais de scolarité:</strong>{" "}
            {student.totalFees.toLocaleString()} FCFA
          </Typography>
          <Typography variant="body1" gutterBottom>
            <strong>Montant versé:</strong> {student.totalPaid.toLocaleString()}{" "}
            FCFA
          </Typography>
          <Typography variant="body1">
            <strong>Reste à payer:</strong>{" "}
            {(student.totalFees - student.totalPaid).toLocaleString()} FCFA
          </Typography>
        </Box>

        <Typography variant="h6" gutterBottom>
          Détail des versements
        </Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Date</TableCell>
                <TableCell align="right">Montant</TableCell>
                <TableCell>Mode de paiement</TableCell>
                <TableCell>Référence</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {student.payments.map((payment) => (
                <TableRow key={payment.id}>
                  <TableCell>{payment.date}</TableCell>
                  <TableCell align="right">
                    {payment.amount.toLocaleString()} FCFA
                  </TableCell>
                  <TableCell>{payment.method}</TableCell>
                  <TableCell>{payment.reference}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </DialogContent>
    </Dialog>
  );
};
ShowEtudiantPaiementsDetails.propTypes = {
  student: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    program: PropTypes.string.isRequired,
    level: PropTypes.string.isRequired,
    totalFees: PropTypes.number.isRequired,
    totalPaid: PropTypes.number.isRequired,
    payments: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        date: PropTypes.string.isRequired,
        amount: PropTypes.number.isRequired,
        method: PropTypes.string.isRequired,
        reference: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ShowEtudiantPaiementsDetails;
