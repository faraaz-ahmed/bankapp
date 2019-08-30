package com.example.demo.restcontroller;

import java.sql.Timestamp;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Collections;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.Account;
import com.example.demo.entity.Customer;
import com.example.demo.entity.Transaction;
import com.example.demo.entity.TransactionDate;
import com.example.demo.repository.AccountRepository;
import com.example.demo.repository.TransactionRepository;

@RestController
@RequestMapping("/transactions")
public class TransactionRestController {

	@Autowired
	TransactionRepository transrepo;

	@Autowired
	AccountRepository accrepo;

	@PostMapping(path = "/transfer", produces = {
			MediaType.APPLICATION_JSON_VALUE }, consumes = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<MyResponse> createTrans(@RequestBody Transaction tx) {
		MyResponse resp = new MyResponse();
		Optional<Account> fromacct = accrepo.findById(tx.getFromacc());
		Optional<Account> toacct = accrepo.findById(tx.getToacc());
		if(fromacct.get().getAno()==toacct.get().getAno()) {
			resp.setMessage("From account and to account are same");
            resp.setStatus("error");
            return ResponseEntity.ok(resp); 
		}
		if (fromacct.isPresent() && toacct.isPresent()) {
			Customer tocust = accrepo.findById(toacct.get().getAno()).get().getCustomer();
            Customer fromcust = accrepo.findById(fromacct.get().getAno()).get().getCustomer();
            if (fromcust.getFlag() == 1 && tocust.getFlag() == 1) 
            {
			if (fromacct.get().getBalance() - tx.getAmount() >= 5000) {
				fromacct.get().setBalance(fromacct.get().getBalance() - tx.getAmount());
				toacct.get().setBalance(toacct.get().getBalance() + tx.getAmount());
				Date date = new Date();
				Timestamp ts1 = new Timestamp(date.getTime());
				DateFormat f = new SimpleDateFormat("yyyy-MM-dd");
				String d = f.format(date);
				System.out.println("date is " + d);
				tx.setDate(d);
				tx.setTs(ts1);
				tx.setFlag(0);
				Integer temp;
				temp = transrepo.getBalanceDate(d,tx.getFromacc());
				if (temp == null) {
					temp = 0;
				}
				if (temp + tx.getAmount() >= 10000 && tx.getFlag() == 0) {
					tx.setFlag(1);
				}
				tx.setFrombal(fromacct.get().getBalance());
				tx.setTobal(toacct.get().getBalance());
				System.out.println(temp);
				transrepo.save(tx);
				accrepo.save(fromacct.get());
				accrepo.save(toacct.get());
				resp.setMessage("transaction is successfully saved" + tx.getTid());
				return ResponseEntity.ok(resp);

			} else {
				resp.setMessage("insufficant funds");
				return ResponseEntity.ok(resp);
			}
            }
            else 
	            {
	                System.out.println("Customer is not activated");
	                resp.setMessage("Customer is not activated");
	                resp.setStatus("error");
	                return ResponseEntity.ok(resp);
	            }
	        } 
	        else 
	        {   
	            resp.setMessage("accounts not found");
	            resp.setStatus("error");
	            return ResponseEntity.ok(resp);
	        }
	}
//	 @PostMapping(path = "/transfer", produces = {
//	            MediaType.APPLICATION_JSON_VALUE }, consumes = MediaType.APPLICATION_JSON_VALUE)
//	    public ResponseEntity<MyResponse> createTrans(@RequestBody Transaction tx) {
//	        MyResponse resp = new MyResponse();
//	        Optional<Account> fromacct = accrepo.findById(tx.getFromacc());
//	        Optional<Account> toacct = accrepo.findById(tx.getToacc());
//	        
//	        System.out.println(fromacct.get().getAno());
//	        System.out.println(toacct.get().getAno());
//	        if (fromacct.isPresent() && toacct.isPresent()) 
//	        {
//	            System.out.println(fromacct.get().getAno());
//	            Customer tocust = accrepo.findById(toacct.get().getAno()).get().getCustomer();
//	            Customer fromcust = accrepo.findById(fromacct.get().getAno()).get().getCustomer();
//	            System.out.println(fromcust.getFlag());
//	            if (fromcust.getFlag() == 1 && tocust.getFlag() == 1) 
//	            {
//	                System.out.println(fromcust.getFlag());
//	                System.out.println(tocust.getAddress());
//	                if (fromacct.get().getBalance() - tx.getAmount() >= 5000) 
//	                {
//	                    fromacct.get().setBalance(fromacct.get().getBalance() - tx.getAmount());
//	                    toacct.get().setBalance(toacct.get().getBalance() + tx.getAmount());
//	                    Date date = new Date();
//	                    Timestamp ts1 = new Timestamp(date.getTime());
//	                    DateFormat f = new SimpleDateFormat("yyyy-MM-dd");
//	                    String d = f.format(date);
//	                    System.out.println("date is " + d);
//	                    tx.setDate(d);
//	                    tx.setTs(ts1);
//	                    tx.setFlag(0);
//	                    Integer temp;
//	                    temp = transrepo.getBalanceDate(d, tx.getFromacc());
//	                    if (temp == null) {
//	                        temp = 0;
//	                    }
//	                    if (temp + tx.getAmount() >= 10000 && tx.getFlag() == 0) {
//	                        tx.setFlag(1);
//	                    }
//	                    tx.setFrombal(fromacct.get().getBalance());
//	                    tx.setTobal(toacct.get().getBalance());
//	                    System.out.println(temp);
//	                    transrepo.save(tx);
//	                    accrepo.save(fromacct.get());
//	                    accrepo.save(toacct.get());
//	                    resp.setMessage("transaction is successfully saved" + tx.getTid());
//	                    return ResponseEntity.ok(resp);
//	                }
//	                else 
//	                {
//	                    resp.setMessage("insufficient funds");
//	                    resp.setStatus("error");
//	                    return ResponseEntity.ok(resp);
//	                }
//	            } 
//	            else 
//	            {
//	                System.out.println("Customer is not activated");
//	                resp.setMessage("Customer is not activated");
//	                resp.setStatus("error");
//	                return ResponseEntity.ok(resp);
//	            }
//	        } 
//	        else 
//	        {   
//	            resp.setMessage("accounts not found");
//	            resp.setStatus("error");
//	            return ResponseEntity.ok(resp);
//	        }
//	    }
	
	@GetMapping(path = "/statement/{id}", produces = {
            MediaType.APPLICATION_JSON_VALUE })
     public ResponseEntity getStatement(@PathVariable("id")int ano){
          MyResponse msg= new MyResponse();
          Optional<Account> acct=accrepo.findById(ano);
          if(acct.isPresent()) {
              List<Transaction> txr=transrepo.getStatementTen(ano);
              Collections.reverse(txr);
              System.out.println("Transactions are:");
//              System.out.println(Arrays.toString(txr.toArray()));
              int x=txr.size();
              if(txr.size()>10) {
              List<Transaction> lr=txr.subList(x-10,x);
              
              return ResponseEntity.ok(lr);
              }
              else {
              return ResponseEntity.ok(txr);
              }
          }else {
        	  msg.setStatus("error");
              return ResponseEntity.ok(msg);
          }
         
     }
	
	@PostMapping(path = "/statementDate/{id}", produces = {
            MediaType.APPLICATION_JSON_VALUE }, consumes = MediaType.APPLICATION_JSON_VALUE)
     public ResponseEntity getStatementDate(@PathVariable("id")int ano, @RequestBody TransactionDate tx){
          MyResponse msg= new MyResponse();
          Optional<Account> acct=accrepo.findById(ano);
          if(acct.isPresent()) {
              List<Transaction> txr=transrepo.getStatementDate(tx.getFromdate(),tx.getTodate(),ano);

              return ResponseEntity.ok(txr);
              }
 
         else {
        	  msg.setStatus("error");
              return ResponseEntity.ok(msg);
          }
         
     }
		
}
