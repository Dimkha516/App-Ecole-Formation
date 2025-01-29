import {
  Box,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
  Typography,
  Tooltip,
  IconButton,
} from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useState } from "react";
import PropTypes from "prop-types";

const DataTable = ({
  title,
  data,
  columns,
  searchKeys,
  filterOptions,
  onSearch,
  onFilter,
  renderActions,
  functionToExecute,
  // eslint-disable-next-line react/prop-types
  filterKey,
  // eslint-disable-next-line react/prop-types
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  // Gestion de la recherche
  const handleSearchChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    if (onSearch) onSearch(query); // Callback si fourni
  };

  // Gestion du filtre
  const handleFilterChange = (event) => {
    const filter = event.target.value;
    setSelectedFilter(filter);
    if (onFilter) onFilter(filter); // Callback si fourni
  };

  // Application de la recherche et du filtre
  // const filteredData = data
  //   .filter((item) => {
  //     if (!searchQuery) return true; // Si aucune recherche, inclure tout
  //     return searchKeys.some((key) =>
  //       item[key].toLowerCase().includes(searchQuery.toLowerCase())
  //     );
  //   })
  //   .filter((item) => {
  //     if (!selectedFilter) return true; // Si aucun filtre, inclure tout
  //     return item.profil === selectedFilter;
  //   });
  const filteredData = data
  .filter((item) => {
    if (!searchQuery) return true; // Si aucune recherche, inclure tout
    return searchKeys.some((key) =>
      item[key]?.toLowerCase().includes(searchQuery.toLowerCase())
    );
  })
  
  .filter((item) => {
    if (!selectedFilter || !filterKey) return true; // Si aucun filtre ou filterKey, inclure tout
    return item[filterKey]?.toString() === selectedFilter;
  });

  // Gestion de la pagination
  const paginatedData = filteredData.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  return (
    <Box sx={{ p: 3 }}>
      {/* Titre et outils */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 3,
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
          {title}
        </Typography>
        <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
          {/* Recherche */}
          <TextField
            label="Rechercher..."
            variant="outlined"
            size="small"
            sx={{ width: 250 }}
            value={searchQuery}
            onChange={handleSearchChange}
          />
          {/* Filtrage */}
          {filterOptions && (
            <FormControl variant="outlined" size="small" sx={{ width: 200 }}>
              <InputLabel id="filter-label">Filtrer</InputLabel>
              <Select
                labelId="filter-label"
                label="Filtrer par profil"
                value={selectedFilter}
                onChange={handleFilterChange}
              >
                <MenuItem value="">Tous</MenuItem>
                {filterOptions.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          )}
          <Tooltip title="AJOUTER">
            <IconButton color="primary" onClick={functionToExecute}>
              <AddCircleIcon sx={{ fontSize: 40 }} />
            </IconButton>
          </Tooltip>
        </Box>
      </Box>

      {/* Tableau */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell key={column.field}>
                  <strong>{column.headerName}</strong>
                </TableCell>
              ))}
              {renderActions && (
                <TableCell>
                  <strong>Actions</strong>
                </TableCell>
              )}
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedData.map((row) => (
              <TableRow key={row.id}>
                {columns.map((column) => (
                  <TableCell key={column.field}>
                    {/* Vérifiez si la colonne a un renderCell */}
                    {column.renderCell
                      ? column.renderCell(row)
                      : row[column.field]}
                  </TableCell>
                ))}
                {renderActions && <TableCell>{renderActions(row)}</TableCell>}
              </TableRow>
            ))}
          </TableBody>

          {/* <TableBody>
            {paginatedData.map((row) => (
              <TableRow key={row.id}>
                {columns.map((column) => (
                  <TableCell key={column.field}>{row[column.field]}</TableCell>
                ))}
                {renderActions && <TableCell>{renderActions(row)}</TableCell>}
              </TableRow>
            ))}
          </TableBody> */}
        </Table>
      </TableContainer>

      {/* Pagination */}
      <TablePagination
        component="div"
        count={filteredData.length}
        page={page}
        onPageChange={(event, newPage) => setPage(newPage)}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={(event) =>
          setRowsPerPage(parseInt(event.target.value, 10))
        }
        rowsPerPageOptions={[2, 5, 10, 15]}
        labelRowsPerPage="Lignes par page"
      />
    </Box>
  );
};
DataTable.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      field: PropTypes.string.isRequired,
      headerName: PropTypes.string.isRequired,
    })
  ).isRequired,
  searchKeys: PropTypes.arrayOf(PropTypes.string).isRequired,
  filterOptions: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ),
  onSearch: PropTypes.func,
  onFilter: PropTypes.func,
  renderActions: PropTypes.func,
  functionToExecute: PropTypes.func.isRequired,
};

export default DataTable;
